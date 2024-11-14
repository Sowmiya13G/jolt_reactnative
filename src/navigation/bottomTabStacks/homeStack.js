import * as React from 'react';

//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../../constant';
import ScreenName from '../screenNames';
// constant

const DashboardStack = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr = [
    {
      ScreenName: SCREENS.DASHBOARD_HOME,
      Component: ScreenName.HomeScreen,
    },
    {
      ScreenName: SCREENS.SEARCH_SCREEN,
      Component: ScreenName.SearchScreen,
    },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.DASHBOARD_HOME}>
      {ScreensComponentArr.map(({ScreenName, Component}, index) => (
        <Stack.Screen
          key={index}
          name={ScreenName}
          component={Component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};
export default DashboardStack;
