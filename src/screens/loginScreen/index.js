import React from 'react';
import { Platform, Text, View } from 'react-native';

//packages
import PropTypes from 'prop-types';

const LoginScreen = props => {
  //props
  const {} = props;

  return (
    <View pointerEvents={Platform.OS === 'ios' ? 'auto' : 'box-none'}>
      <Text>LoginScreen</Text>
    </View>
  );
};

LoginScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default LoginScreen;
