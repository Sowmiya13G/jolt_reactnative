import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Platform, Text, View} from 'react-native';

//packages
import PropTypes from 'prop-types';
import {heightPercentageToDP} from 'react-native-responsive-screen';

// navigation
import NavigationService from '../../navigation/NavigationService';
// components
import Button from '../../components/button';
import Spacer from '../../components/spacer';

// constants
import {SCREENS} from '../../constant';
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

  // Functions
  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
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
      flatListRef.current.scrollToIndex({index: nextPage});
    }
    if (nextPage == onboardingData?.length) {
      handleCompleteSlider();
    }
  };

  // render UI
  return (
    <View pointerEvents={Platform.OS === 'ios' ? 'auto' : 'box-none'}>
      <FlatList
        data={onboardingData}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{width, height: '100%'}}>
            <View style={styles.wrapper}>
              <Spacer height={heightPercentageToDP('15%')} />

              <Image source={item.image} style={styles.imageStyle} />
              <Spacer height={heightPercentageToDP('3%')} />

              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black),
                ]}>
                {item.title}
              </Text>
              <Spacer height={heightPercentageToDP('3%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black),
                ]}>
                {item.disc}
              </Text>
            </View>
          </View>
        )}
        onScroll={event => {
          setSliderPage(event);
        }}
      />
      <Spacer height={heightPercentageToDP('3%')} />
      <View style={styles.paginationWrapper}>
        {Array.from(Array(onboardingData.length).keys()).map(index => (
          <View
            key={index}
            style={[
              styles.paginationDots,
              {
                backgroundColor:
                  pageIndex === index ? colors.lightGreen : colors.grey,
              },
            ]}
          />
        ))}
      </View>

      <Spacer height={heightPercentageToDP('6%')} />

      <View style={styles.buttonView}>
        <Button
          onPress={() => handleCompleteSlider()}
          text={strings.skip}
          textColor={colors.black}
          buttonStyle={styles.skipButton}
        />
        <Button
          onPress={() => goToNextPage()}
          text={strings.next}
          textColor={colors.white}
          buttonStyle={styles.nextButton}
        />
      </View>
    </View>
  );
};

OnboardingScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default OnboardingScreen;
