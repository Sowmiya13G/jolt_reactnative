import React, {useRef, useState} from 'react';
import {Animated, Dimensions, FlatList, Image, Text, View} from 'react-native';

//packages
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// navigation
import NavigationService from '../../navigation/NavigationService';
// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Spacer from '../../components/spacer';

// constants
import {SCREENS} from '../../constant';
import {iconPathURL} from '../../constant/iconpath';
import {onboardingData} from '../../constant/staticData';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from './styles';

 const OnboardingScreen = props => {
  //props
  const {} = props;

  // ref
  const flatListRef = useRef(null);

  // use State
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

  const {currentPage: pageIndex} = sliderState;
  const animation = useRef(new Animated.Value(0)).current;
  // Functions
  const setSliderPage = event => {
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);

    if (indexOfNextScreen !== sliderState.currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });

      Animated.timing(animation, {
        toValue: indexOfNextScreen,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleCompleteSlider = () => {
    NavigationService.navigate(SCREENS.LOGIN);
  };

  const goToNextPage = () => {
    const nextPage = sliderState.currentPage + 1;
    if (nextPage < onboardingData.length) {
      setSliderState({
        ...sliderState,
        currentPage: nextPage,
      });

      Animated.timing(animation, {
        toValue: nextPage,
        duration: 300,
        useNativeDriver: false,
      }).start();

      flatListRef.current.scrollToIndex({index: nextPage});
    }
    if (nextPage == onboardingData?.length) {
      handleCompleteSlider();
    }
  };

  // render UI
  return (
    <CustomSafeArea style={styles.container}>
      <Spacer height={hp('5%')} />
      <View style={[styles.iconView, styles.marginHorizontal]}>
        <Image source={iconPathURL.logo} style={styles.logo} />
        <Spacer width={wp('3%')} />
        <View>
          <Text
            style={[baseStyle.txtStyleOutInterBold(sizes.size3, colors.black)]}>
            {strings.joltBus}
          </Text>
          <Spacer height={hp('0.5%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.black),
            ]}>
            {strings.futureTransportation}
          </Text>
        </View>
      </View>
      <FlatList
        data={onboardingData}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{width, height: '100%'}}>
            <View style={[styles.wrapper, styles.marginHorizontal]}>
              <Spacer height={hp('10%')} />
              <Image source={item.image} style={styles.imageStyle} />
              <Spacer height={hp('3%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black),
                  styles.textAlign,
                ]}>
                {item.title}
              </Text>
              <Spacer height={hp('3%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black),
                  styles.textAlign,
                ]}>
                {item.disc}
              </Text>
            </View>
          </View>
        )}
        onScroll={event => {
          setSliderPage(event);
        }}
        scrollEventThrottle={16}
      />
      <View style={styles.paginationWrapper}>
        {onboardingData.map((_, index) => {
          const backgroundColor = animation.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [colors.grey, colors.lightGreen, colors.grey],
            extrapolate: 'clamp',
          });

          const width = animation.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [wp('2.5%'), wp('8%'), wp('2.5%')],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.paginationDots,
                {
                  backgroundColor,
                  width,
                },
              ]}
            />
          );
        })}
      </View>

      <Spacer height={hp('10%')} />
      <View style={[styles.buttonView, styles.marginHorizontal]}>
        <Button
          onPress={() => {
            NavigationService.navigate(SCREENS.BOTTOM_TAB_NAV);
            // handleCompleteSlider();
          }}
          text={strings.skip}
          textColor={colors.textGreyDark}
          buttonStyle={styles.skipButton}
        />
        <Button
          onPress={() => goToNextPage()}
          text={pageIndex === 0 ? strings.getStart : strings.next}
          textColor={colors.white}
          buttonStyle={styles.nextButton}
        />
      </View>
      <Spacer height={hp('10%')} />
    </CustomSafeArea>
  );
};

OnboardingScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default OnboardingScreen;
