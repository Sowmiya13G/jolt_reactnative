import {Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const sizes = {
  // global sizes
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1%'),
  iconBigSize: hp('3%'),
  iconMediumSize: hp('2%'),
  iconSmallSize: hp('1%'),
  mediumFontText: hp('1.5%'),
  mediumFontTwoText: hp('2.5%'),

  size0: Platform.OS == 'ios' ? hp('1%') : hp('1.2%'),
  size01: Platform.OS == 'ios' ? hp('1.3%') : hp('1.5%'),
  size11: Platform.OS == 'ios' ? hp('1.35%') : hp('1.55%'),
  size1: Platform.OS == 'ios' ? hp('1.5%') : hp('1.7%'),
  size2: Platform.OS == 'ios' ? hp('1.8%') : hp('1.9%'),
  size3: Platform.OS == 'ios' ? hp('2%') : hp('2.2%'),
  size4: Platform.OS == 'ios' ? hp('2.3%') : hp('2.5%'),
  size5: Platform.OS == 'ios' ? hp('2.5%') : hp('2.7%'),
  size6: Platform.OS == 'ios' ? hp('2.8%') : hp('3%'),
  size7: Platform.OS == 'ios' ? hp('3%') : hp('3.2%'),
  size011: Platform.OS == 'ios' ? hp('1.4%') : hp('1.6%'),
  size02: Platform.OS == 'ios' ? hp('1.6%') : hp('1.8%'),
};
const fontFamily = {
  fontInterRegular: 'Inter-Regular',
  fontInterBold: 'Inter-Bold',
  fontInterSemiBold: 'Inter-SemiBold',
  fontInterMedium: 'Inter-Medium',
};

const baseStyle = {
  txtStyleOutInterRegular: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterBold: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterSemiBold: (fontSize, fontColor) => ({
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterMedium: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Medium',
    fontSize: fontSize,
    color: fontColor,
  }),
  cardElevationStyle: () => ({
    elevation: 3,
    ...(Platform.OS == 'ios' && {
      shadowColor: colors.black,
      shadowOpacity: 0.26,
      shadowOffset: {width: 1, height: 2},
      shadowRadius: 3,
    }),
  }),
  circleView: size => ({
    width: wp(size),
    height: wp(size),
    borderRadius: wp(size) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  iconStyle: size => ({
    width: wp(size),
    height: wp(size),
    resizeMode: 'contain',
  }),
};

const colors = {
  //black variants
  black: '#000000',
  white: '#FFFFFF',
  orange: '#FD6905',
  lightGreen: '#24DD7D',
  grey: '#DDDDDD',
};

export {baseStyle, colors, fontFamily, sizes};
