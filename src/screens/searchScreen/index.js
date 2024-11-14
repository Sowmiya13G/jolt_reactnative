import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// navigation
import NavigationService from '../../navigation/NavigationService';

//packages
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import RenderDates from '../../components/renderDates';
import SearchComponent from '../../components/searchComponent';
import Spacer from '../../components/spacer';

// constant
import { iconPathURL } from '../../constant/iconpath';
import { dashboard, PLACEHOLDERS } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from './styles';


const SearchScreen = props => {
  //props

  // local states
  const [data, setData] = useState({
    fromLocation: '',
    toLocation: '',
  });
  const [focusedInput, setFocusedInput] = useState(null);

  // data
  const trips = [
    {id: 1, from: 'Bangalore', to: 'Chennai'},
    {id: 2, from: 'Bangalore', to: 'Coimbatore'},
    {id: 3, from: 'Delhi', to: 'Goa'},
    {id: 4, from: 'Mumbai', to: 'Pune'},
  ];

  const cityList = [
    {id: 1, city: 'Bangalore'},
    {id: 2, city: 'Bangalore'},
    {id: 3, city: 'Delhi'},
    {id: 4, city: 'Mumbai'},
  ];

  // use effects

  // ------------------ FUNCTIONALITIES ----------------------

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

  const handleFocusChange = inputName => {
    setFocusedInput(inputName);
  };

  const handleCitySelect = city => {
    if (focusedInput == 'from') {
      onChangeFromLocation(city);
    } else if (focusedInput == 'to') {
      onChangeToLocation(city);
    }
    setFocusedInput(null);
  };

  const handleTripSelect = (from, to) => {
    setData({
      fromLocation: from,
      toLocation: to,
    });
  };

  // ------------------ RENDER UI ----------------------

  const renderCityList = ({item}) => {
    return (
      <>
        <Spacer height={hp('1%')} />
        <TouchableOpacity
          onPress={() => handleCitySelect(item.city)}
          style={styles.view}>
          <View style={styles.row}>
            <Image source={iconPathURL.location} style={styles.location} />
            <Spacer width={wp('3%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.adGrey),
              ]}>
              {item.city}
            </Text>
          </View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.adGrey),
            ]}>
            {dashboard.city}
          </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
      </>
    );
  };
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
          onFocusChange={handleFocusChange}
        />
        {Boolean(focusedInput) ? (
          <FlatList
            data={cityList}
            renderItem={renderCityList}
            keyExtractor={item => item.id?.toString()}
          />
        ) : (
          <>
            <Spacer height={hp('3%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size3,
                  colors.textBlack,
                ),
              ]}>
              {dashboard.recentTrips}
            </Text>
            <Spacer height={hp('2%')} />
            <RenderDates
              data={trips}
              isTrips={true}
              isDates={false}
              onTripSelect={handleTripSelect}
            />
          </>
        )}
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white}>
      <Header
        goBack={() => {
          NavigationService.goBack();
        }}
        title={dashboard.searchRoute}
        color={colors.textGrey}
      />
      <TouchableWithoutFeedback onPress={() => setFocusedInput(null)}>
        {renderBody()}
      </TouchableWithoutFeedback>
    </CustomSafeArea>
  );
};

SearchScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default SearchScreen;
