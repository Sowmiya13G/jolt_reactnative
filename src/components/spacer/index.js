import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

function Spacer(props) {
  return <View   height={props.height} width={props.width} />;
}

Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spacer;
