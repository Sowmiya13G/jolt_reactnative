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
import styles from '../styles/wallet';

const WalletScreen = props => {
  //props

  const renderBody = () => {
    return <></>;
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
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

WalletScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default WalletScreen;
