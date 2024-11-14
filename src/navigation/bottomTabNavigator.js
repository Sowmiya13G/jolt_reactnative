import React from 'react';
import {Image, Platform, StyleSheet, Text} from 'react-native';

// packages
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// constants
import {SCREENS} from '../constant';
import {iconPathURL} from '../constant/iconpath';
import {tabBar} from '../constant/strings';
import {baseStyle, colors, sizes} from '../constant/theme';
import ScreenName from './screenNames';
import DashboardStack from './bottomTabStacks/homeStack';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  //screens
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
      name: SCREENS?.MY_TRIP,
      component: ScreenName?.MyTripScreen,
      title: tabBar?.myTrip,
      icon: iconPathURL?.trips,
    },
    {
      id: 3,
      name: SCREENS?.ACCOUNT_SCREEN,
      component: ScreenName?.AccountScreen,
      title: tabBar?.account,
      icon: iconPathURL?.person,
    },
    {
      id: 4,
      name: SCREENS?.WALLET_SCREEN,
      component: ScreenName?.WalletScreen,
      title: tabBar?.wallet,
      icon: iconPathURL?.wallet,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}>
      {screenItem?.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          name={tab?.name}
          component={tab?.component} 
          options={{
            tabBarIcon: ({focused}) => (
              <AnimatedIcon icon={tab.icon} focused={focused} />
            ),
            tabBarLabel: ({focused}) => (
              <Text style={styles.tabBarLabelStyle(focused)}>{tab.title}</Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const AnimatedIcon = ({icon, focused}) => {
  const borderWidth = useSharedValue(focused ? 3 : 0);

  const animatedBorderStyle = useAnimatedStyle(() => ({
    borderTopWidth: withTiming(borderWidth.value, {duration: 300}),
    borderColor: colors.orange,
  }));

  const animatedIconStyle = {
    tintColor: focused ? colors.orange : colors.grey,
    ...baseStyle.iconStyle(focused ? '6.5%' : '5%'),
  };

  return (
    <Animated.View style={[styles.iconContainer, animatedBorderStyle]}>
      <Image source={icon} style={[styles.icon, animatedIconStyle]} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP('10%'),
    height: heightPercentageToDP('5%'),
  },
  icon: {
    resizeMode: 'contain',
  },
  tabBarLabelStyle: focused => ({
    ...(focused
      ? baseStyle.txtStyleOutInterMedium(sizes.size011, colors.orange)
      : baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey)),
    color: focused ? colors.orange : colors.grey,
    top: Platform.OS === 'ios' ? null : heightPercentageToDP('-2%'),
  }),
});

export default BottomNavigation;
