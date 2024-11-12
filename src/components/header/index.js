import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

//packages
import PropTypes from 'prop-types';

//styles
import styles from './styles';

//components

//constants
import { iconPathURL } from '../../constant/iconpath';
import { baseStyle, colors, sizes } from '../../constant/theme';

const Header = props => {
  //prop
  const {
    goBack,
    color,
    title,
    leftIcon1 = iconPathURL.backArrow,
    customRightIconStyle,
    rightIcon1Press = () => {},
    greyView = {},
    leftIcon = {},
    notificationTxt = true,
    isNotificationScreen = false,
    notificationScreenBtn,
    handleNotification = () => {},
    tintColor = colors.white,
  } = props;

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        onPress={() => {
          Boolean(goBack) && goBack();
        }}
        style={styles.leftIconView}>
        <Image
          resizeMode="contain"
          style={[styles.imageOnboarding, {tintColor: tintColor}]}
          source={leftIcon1}
        />
      </TouchableOpacity>
      <View style={styles.titleText}>
        <Text
          style={[
            baseStyle.txtStyleOutInterBold(sizes.size3, color),
            {textAlign: 'center'},
          ]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  goBack: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  leftIcon1: PropTypes.string,
  leftIcon2: PropTypes.string,
  rightIcon1: PropTypes.string,
  customRightIconStyle: PropTypes.object,
  rightIcon1Press: PropTypes.func,
  isLeftIcon2Pressable: PropTypes.bool,
  type: PropTypes.number,
  greyView: PropTypes.object,
  leftIcon: PropTypes.object,
  notificationTxt: PropTypes.bool,
  isNotificationScreen: PropTypes.bool,
  notificationScreenBtn: PropTypes.string,
  handleNotification: PropTypes.func,
  leftContainer: PropTypes.shape({
    onPress: PropTypes.func,
  }),
  rightContainer: PropTypes.shape({
    text: PropTypes.string,
    onPress: PropTypes.func,
  }),
  leftIconPress: PropTypes.func,
  rightIconPress: PropTypes.func,
};

export default Header;
