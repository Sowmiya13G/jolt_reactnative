import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

//packages
import PropTypes from 'prop-types';
import {heightPercentageToDP} from 'react-native-responsive-screen';

//styles
import styles from './styles';

//components
import Spacer from '../spacer';

//constants
import {iconPathURL} from '../../constant/iconpath';
import {baseStyle, colors, sizes} from '../../constant/theme';

// utils
import {formatDateLabel} from '../../utils/helperFunctions';

const Header = props => {
  //prop
  const {
    color,
    title,
    tintColor = colors.white,
    isHomeHeader = false,
    isCommonHeader = true,
    titleData,
    sessionColor,

    // left icon
    isLeftIcon = true,
    leftIcon1 = iconPathURL.backArrow,
    goBack,

    // right icon
    isRightIcon,
    rightIcon = iconPathURL.backArrow,
    rightIconPress = () => {},
    rightTintColor = colors.black,
    date,
  } = props;

  return (
    <View style={styles.rootContainer}>
      {/* ---------------------------- LEFT ICON ---------------------------- */}
      {Boolean(isLeftIcon) && (
        <TouchableOpacity
          onPress={() => {
            Boolean(goBack) && goBack();
          }}
          style={styles.leftIconView}>
          {Boolean(leftIcon1) && (
            <Image
              resizeMode="contain"
              style={[styles.imageOnboarding, {tintColor: tintColor}]}
              source={leftIcon1}
            />
          )}
        </TouchableOpacity>
      )}
      {/* ---------------------------- COMMON HEADER---------------------------- */}

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

      {/* ---------------------------- HOME SCREEN HEADER---------------------------- */}

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
                style={[
                  baseStyle.txtStyleOutInterSemiBold(sizes.size3, color),
                ]}>
                {titleData?.user}
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationView}>
              {Boolean(iconPathURL.notification) && (
                <Image
                  source={iconPathURL.notification}
                  style={styles.notificationIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          <Spacer height={heightPercentageToDP('1.5%')} />
          <View style={styles.horizontalLine} />
        </View>
      )}

      {/* ---------------------------- RIGHT ICON---------------------------- */}

      {Boolean(isRightIcon) && (
        <>
          {Boolean(date) && (
            <>
              {(() => {
                const formattedDate = formatDateLabel(date, true);
                const [weekday, dayMonth] = formattedDate.split(', ');

                return (
                  <View style={styles.column}>
                    <Text
                      style={[
                        baseStyle.txtStyleOutInterRegular(sizes.size01, color),
                      ]}>
                      {weekday},
                    </Text>
                    <Text
                      style={[
                        baseStyle.txtStyleOutInterMedium(sizes.size01, color),
                      ]}>
                      {dayMonth}
                    </Text>
                  </View>
                );
              })()}
            </>
          )}
          <TouchableOpacity
            onPress={() => {
              Boolean(rightIconPress) && rightIconPress();
            }}
            style={styles.rightIconView}>
            {Boolean(rightIcon) && (
              <Image
                resizeMode="contain"
                style={[styles.rightIcon, {tintColor: rightTintColor}]}
                source={rightIcon}
              />
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  tintColor: PropTypes.string,
  isHomeHeader: PropTypes.bool,
  isCommonHeader: PropTypes.bool,
  titleData: PropTypes.object,
  sessionColor: PropTypes.string,

  // Left icon props
  isLeftIcon: PropTypes.bool,
  leftIcon1: PropTypes.oneOfType([PropTypes.number,PropTypes.string, PropTypes.object]),
  goBack: PropTypes.func,

  // Right icon props
  isRightIcon: PropTypes.bool,
  rightIcon: PropTypes.oneOfType([PropTypes.number,PropTypes.string, PropTypes.object]),
  rightIconPress: PropTypes.func,
  rightTintColor: PropTypes.string,

  // Date props
  date: PropTypes.string,
};

Header.defaultProps = {
  tintColor: colors.white,
  isHomeHeader: false,
  isCommonHeader: true,
  sessionColor: colors.black,
  isLeftIcon: true,
  leftIcon1: iconPathURL.backArrow,
  rightIconPress: () => {},
  rightTintColor: colors.black,
  date: null,
};

export default Header;
