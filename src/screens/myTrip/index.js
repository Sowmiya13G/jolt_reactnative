import React from 'react';
import { FlatList } from 'react-native';

// navigation

//packages
import PropTypes from 'prop-types';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';

// constant
import { colors } from '../../constant/theme';
import styles from './styles';

const MyTripScreen = props => {
  //props

  const renderBody = () => {
    return <></>;
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white}>
      <Header
        goBack={() => {
          NavigationService.goBack();
        }}
      />
      <FlatList
        data={['MY_TRIP']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
    </CustomSafeArea>
  );
};

MyTripScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default MyTripScreen;
