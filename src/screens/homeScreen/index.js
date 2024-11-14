import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

// navigation
import NavigationService from '../../navigation/NavigationService';

//packages
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import PersonCount from '../../components/personCount';
import RenderDates from '../../components/renderDates';
import SearchComponent from '../../components/searchComponent';
import Spacer from '../../components/spacer';

// constant
import {SCREENS} from '../../constant';
import {iconPathURL} from '../../constant/iconpath';
import {dashboard, PLACEHOLDERS, strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// utils
import {getNextDates, getSessionText} from '../../utils/helperFunctions';

// styles
import styles from './styles';

const HomeScreen = props => {
  //props

  // local states
  const [data, setData] = useState({
    fromLocation: '',
    toLocation: '',
  });
  const [count, setCount] = useState(0);

  // use effects

  // ------------------ FUNCTIONALITIES ----------------------

  const headerData = {
    session: getSessionText(),
    user: dashboard.name,
  };

  const swapLocation = () => {
    setData(prevData => ({
      fromLocation: prevData.toLocation,
      toLocation: prevData.fromLocation,
    }));
  };

  const onChangeFromLocation = value => {
    setData(prevData => ({
      ...prevData,
      fromLocation: value,
    }));
  };

  const onChangeToLocation = value => {
    setData(prevData => ({
      ...prevData,
      toLocation: value,
    }));
  };

  // ------------------ RENDER UI ----------------------

  const renderBody = () => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('3%')} />
        <SearchComponent
          fromValue={data.fromLocation}
          toValue={data.toLocation}
          fromPlaceHolder={PLACEHOLDERS.yourCurrentLocation}
          toPlaceHolder={PLACEHOLDERS.searchForDestination}
          swapLocation={() => swapLocation()}
          onChangeFromLocation={onChangeFromLocation}
          onChangeToLocation={onChangeToLocation}
        />
        <Spacer height={hp('3%')} />
        <View style={styles.horizontalLine} />
        <PersonCount count={count} setCount={setCount} />
        <View style={styles.horizontalLine} />
        <Spacer height={hp('3%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size3, colors.textBlack),
          ]}>
          {dashboard.availableDates}
        </Text>
        <Spacer height={hp('2%')} />
        <RenderDates data={getNextDates()} isDates={true} />
        <Spacer height={hp('5%')} />
        <Button
          onPress={() => {
            NavigationService.navigate(SCREENS.SEARCH_SCREEN);
          }}
          text={dashboard.searchBus}
          buttonStyle={styles.button}
          textStyle={styles.textStyle}
          icon={iconPathURL.search}
        />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white}>
      <Header
        goBack={() => {
          NavigationService.goBack();
        }}
        title={strings.forgotPasswordTitle}
        color={colors.titleBlack}
        isLeftIcon={false}
        isCommonHeader={false}
        titleData={headerData}
        isHomeHeader={true}
        sessionColor={colors.textGrey}
      />
      <FlatList
        data={['HOME_SCREEN']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
    </CustomSafeArea>
  );
};

HomeScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default HomeScreen;
