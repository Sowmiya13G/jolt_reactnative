import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

// navigation
import NavigationService from '../../navigation/NavigationService';

//packages
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constant
import {colors} from '../../constant/theme';

// styles
import {iconPathURL} from '../../constant/iconpath';

import styles from '../styles/selectBoardingPoints';

const SelectBoardingPoints = props => {
  //props
  const {data} = props.route.params;
  console.log('🚀 ~ SelectBoardingPoints ~ data:', data);

  // local states
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // use effects

  // ------------------ FUNCTIONALITIES ----------------------

  const handleFilterSelect = selectedItems => {
    setSelectedFilters(selectedItems);
  };

  // ------------------ RENDER UI ----------------------

  const renderBody = ({item}) => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('3%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          NavigationService.goBack();
        }}
        title={`${data?.from} To ${data?.to}`}
        color={colors.black_00}
        isRightIcon={true}
        rightIcon={iconPathURL.calender}
        date={data?.date}
      />
      <Spacer height={hp('3%')} />
      <FlatList
        data={[]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

SelectBoardingPoints.propTypes = {
  route: PropTypes.shape({}),
};

export default SelectBoardingPoints;
