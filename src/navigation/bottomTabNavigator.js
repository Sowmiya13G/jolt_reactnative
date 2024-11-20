import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// package
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// constant
import {SCREENS} from '../constant';
import {iconPathURL} from '../constant/iconpath';
import {tabBar} from '../constant/strings';
import {baseStyle, colors, sizes} from '../constant/theme';
import ScreenName from './screenNames';

import DashboardStack from './bottomTabStacks/homeStack';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = React.useState(SCREENS.DASHBOARD);

  // Tab items
  const screenItem = [
    {
      id: 1,
      name: SCREENS.DASHBOARD,
      component: DashboardStack,
      title: tabBar?.home,
      icon: iconPathURL?.home,
    },
    {
      id: 2,
      name: SCREENS.MY_TRIP,
      component: ScreenName?.MyTripScreen,
      title: tabBar?.myTrip,
      icon: iconPathURL?.trips,
    },
    {
      id: 3,
      name: SCREENS.ACCOUNT_SCREEN,
      component: ScreenName?.AccountScreen,
      title: tabBar?.account,
      icon: iconPathURL?.person,
    },
    {
      id: 4,
      name: SCREENS.WALLET_SCREEN,
      component: ScreenName?.WalletScreen,
      title: tabBar?.wallet,
      icon: iconPathURL?.wallet,
    },
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case SCREENS.DASHBOARD:
        return <DashboardStack />;
      case SCREENS.MY_TRIP:
        return <DashboardStack />;
      case SCREENS.ACCOUNT_SCREEN:
        return <DashboardStack />;
      case SCREENS.WALLET_SCREEN:
        return <DashboardStack />;
    }
  };

  return (
    <>
      {renderScreen()}
      <View style={styles.tabBarContainer}>
        {screenItem.map(tab => {
          const isActive = activeTab === tab.name;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.name)}>
              <View
                style={[styles.iconContainer, isActive && styles.activeTab]}>
                <Image source={tab.icon} style={[styles.icon(isActive)]} />
                <Text
                  style={[
                    styles.tabLabel,
                    isActive
                      ? baseStyle.txtStyleOutInterMedium(
                          sizes.size011,
                          colors.orange,
                        )
                      : baseStyle.txtStyleOutInterRegular(
                          sizes.size01,
                          colors.grey_DD,
                        ),
                  ]}>
                  {tab.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white_FF,
    height: Platform.OS === 'android' ? hp('7%') : hp('9%'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'android' ? hp('7%') : hp('9%'),
  },
  icon: isActive => ({
    resizeMode: 'contain',
    ...baseStyle.iconStyle(isActive ? '7%' : '5%'),
    tintColor: isActive ? colors.orange : colors.grey_DD,
  }),
  activeTab: {
    borderTopWidth: 3,
    borderColor: colors.orange,
  },
  tabLabel: {
    marginTop: hp('0.5%'),
  },
});

export default BottomNavigation;
