import * as React from 'react';

//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../../constant';
import ScreenName from '../screenNames';
// constant

const DashboardStack = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr = [
    {
      ScreenName: SCREENS.HOME_SCREEN,
      Component: ScreenName.HomeScreen,
    },
    {
      ScreenName: SCREENS.SEARCH_SCREEN,
      Component: ScreenName.SearchScreen,
    },
    {
      ScreenName: SCREENS.SEARCH_BUS_SCREEN,
      Component: ScreenName.SearchBusScreen,
    },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      {ScreensComponentArr.map(({ScreenName, Component}) => (
        <Stack.Screen
          key={ScreenName}
          name={ScreenName}
          component={Component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};
export default DashboardStack;
