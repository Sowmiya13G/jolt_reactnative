import * as React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationService from './NavigationService';

// constant
import { SCREENS } from '../constant';
import ScreenName from './screenNames';

export const AppStack = () => {
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
  ];

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator initialRouteName={SCREENS.ONBOARDING}>
        {ScreensComponentArr.map(({ScreenName, Component}, index) => {
          return (
            <Stack.Screen
              key={`${ScreenName}_stackScreen`}
              name={ScreenName}
              component={Component}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>

  );
};
