import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

//packages
import PropTypes from 'prop-types';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

//styles
import styles from './styles';

//components
import Spacer from '../spacer';

//constants
import {iconPathURL} from '../../constant/iconpath';
import {baseStyle, colors, sizes} from '../../constant/theme';


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
    isLeftIcon = true,
    isHomeHeader = false,
    isCommonHeader = true,
    titleData,
    sessionColor,
  } = props;

  return (
    <View style={styles.rootContainer}>
      {Boolean(isLeftIcon) && (
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
      )}
      {Boolean(isCommonHeader) && (
        <View style={styles.titleText}>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, color),
              {textAlign: 'center'},
            ]}>
            {title}
          </Text>
        </View>
      )}
      {Boolean(isHomeHeader) && (
        <View style={{flex: 1}}>
          <Spacer height={heightPercentageToDP('2%')} />
          <View style={styles.titleView}>
            <View>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(sizes.size2, sessionColor),
                ]}>
                {titleData?.session},
              </Text>
              <Spacer height={heightPercentageToDP('0.5%')} />
              <Text
                style={[baseStyle.txtStyleOutInterSemiBold(sizes.size3, color)]}>
                {titleData?.user}
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationView}>
              <Image
                source={iconPathURL.notification}
                style={styles.notificationIcon}
              />
            </TouchableOpacity>
          </View>
          <Spacer height={heightPercentageToDP('1.5%')} />
          <View style={styles.horizontalLine} />
        </View>
      )}
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
