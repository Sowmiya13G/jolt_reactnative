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
      shadowColor: colors.black_00,
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
  black_00: '#000000',
  black_23: '#0F0D23',
  black_22: '#222222',
  black_28: '#101828',

  white_FF: '#FFFFFF',
  white_FB: '#F9FAFB',


  orange: '#FD6905',
  red: '#D92D20',

  // grey variants
  grey_AB: '#ABABAB',
  grey_DD: '#DDDDDD',
  grey_DB: '#D1D5DB',
  grey_D9: '#D9D9D9',
  grey_F0: '#EAECF0',
  grey_F1: '#EDEEF1',
  grey_7F: '#6C737F',
  grey_95: '#697D95',
  grey_32: '#333232',
  grey_37: '#373737',
  grey_50: '#505050',
  grey_55: '#555555',
  grey_67: '#475467',
  grey_7C: '#7C7C7C',
  grey_80: '#6B7280',
  grey_085: '#667085',
  grey_685: '#868685',
  grey_5DD: '#D0D5DD',
  
  // green variants
  green_7D: '#24DD7D',
  green_2F: '#3AB72F',
  green_3C: '#8EB43C',
  green_D6: '#CDEED6',
  green_63C: '#20463C',
  green_38: '#129C38',

  // blue variants
  blue_F4: '#0056F4',

  yellow_00: '#FDC400',

  transparent: 'transparent',
};

export {baseStyle, colors, fontFamily, sizes};
