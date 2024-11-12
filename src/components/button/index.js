import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
//styles
import styles from './styles';
//component
import Spacer from '../spacer';
//constant
import {baseStyle, sizes} from '../../constant/theme';

export default function Button(props) {
  //props
  const {
    onPress,
    text,
    icon,
    rightIcon,
    spaceBetween,
    height,
    flex,
    width,
    borderRadius,
    textColor,
    textSize = sizes.size2,
    backgroundColor,
    alignSelf,
    disabled = false,
    borderWidth,
    borderColor,
    paddingVertical,
    buttonStyle,
    tintColor,
    textStyle,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          flex: flex,
          height: height,
          width: width,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          alignSelf: alignSelf,
          borderColor: borderColor,
          borderWidth: borderWidth,
          paddingVertical: paddingVertical,
        },
        {...buttonStyle},
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.65}>
      {Boolean(icon) && (
        <>
          <Image source={icon} style={styles.icon} />
          <Spacer width={spaceBetween} />
        </>
      )}
      {Boolean(text) && (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(textSize, textColor),
              textStyle,
            ]}>
            {text}
          </Text>
          {Boolean(rightIcon) && (
            <>
              <View style={styles.imgView}>
                <Image
                  source={rightIcon}
                  style={[styles.iconRight, {tintColor: tintColor}]}
                />
              </View>
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.shape({uri: PropTypes.string}),
  rightIcon: PropTypes.shape({uri: PropTypes.string}),
  spaceBetween: PropTypes.number,
  height: PropTypes.number,
  flex: PropTypes.number,
  width: PropTypes.number,
  borderRadius: PropTypes.number,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  alignSelf: PropTypes.string,
  disabled: PropTypes.bool,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  paddingVertical: PropTypes.number,
  buttonStyle: PropTypes.object,
  tintColor: PropTypes.string,
};

Button.defaultProps = {
  textSize: sizes.size2,
  disabled: false,
};
