import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as hp,
  heightPercentageToDP as wp
} from 'react-native-responsive-screen';
import { baseStyle, colors, fontFamily } from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '5%',
  },
  texAlign: {
    textAlign: 'center',
  },
  titleMargin: {marginHorizontal: wp('4%')},
  errView: {
    backgroundColor: colors.red,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('1.5%'),
    borderRadius: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelIcon: {
    ...baseStyle.iconStyle('3%'),
  },
  otp: {
    height: heightPercentageToDP('8%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
    color: colors.onboardingTitle,
  },
  underlineStyleBase: {
    width: wp('8%'),
    height: wp('6%'),
    borderRadius: wp('1%'),
    fontSize: hp('5%'),
    fontFamily: fontFamily.fontInterRegular,
    color: colors.onboardingTitle,
  },
  loginButton: {
    backgroundColor: colors.orange,
    borderRadius: wp('1.5%'),
    paddingVertical: wp('2%'),
    alignItems: 'center',
  },
  alreadyTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
