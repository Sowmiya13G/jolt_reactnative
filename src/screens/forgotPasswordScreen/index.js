import React from 'react';
import {Text, View} from 'react-native';

//packages
import PropTypes from 'prop-types';

const ForgotPasswordScreen = props => {
  //props
  const {} = props;

  return (
    <View>
      <Text>ForgotPasswordScreen</Text>
    </View>
  );
};

ForgotPasswordScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default ForgotPasswordScreen;
