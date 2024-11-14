import * as React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationService from './NavigationService';

// constant
import { SCREENS } from '../constant';
import ScreenName from './screenNames';
import BottomNavigation from './bottomTabNavigator';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr = [
    {
      ScreenName: SCREENS.ONBOARDING,
      Component: ScreenName.OnboardingScreen,
    },
    {
      ScreenName: SCREENS.LOGIN,
      Component: ScreenName.LoginScreen,
    },
    {
      ScreenName: SCREENS.FORGOT_PASSWORD,
      Component: ScreenName.ForgotPasswordScreen,
    },
    {
      ScreenName: SCREENS.OTP_SCREEN,
      Component: ScreenName.OTPScreen,
    },
    {
      ScreenName: SCREENS.REGISTER_SCREEN,
      Component: ScreenName.RegisterScreen,
    },
    {
      ScreenName: SCREENS.BOTTOM_TAB_NAV,
      Component: BottomNavigation,
    },
  ];

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator initialRouteName={SCREENS.ONBOARDING}>
        {ScreensComponentArr.map(({ScreenName, Component}) => (
          <Stack.Screen
            key={ScreenName}
            name={ScreenName}
            component={Component}
            options={{headerShown: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
