import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
  },
  marginHorizontal: {
    marginHorizontal: wp('5%'),
  },
  alignSelf: {
    alignSelf: 'center',
  },
  wrapper: {
    flex: 1,
    alignSelf: 'center',
  },
  textAlign: {
    textAlign: 'right',
  },
  imageStyle: {
    width: wp('65%'),
    height: wp('65%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  banner: {
    height: hp('20%'),
    backgroundColor: colors.green_3C,
  },
  bus: {
    height: hp('20%'),
    resizeMode: 'contain',
    width: '70%',
    alignSelf: 'flex-end',
    display: 'flex',
  },
  buttonView: {
    // paddingHorizontal: wp('5%'),
  },
  mobNoBtn: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    borderWidth: wp('0.1%'),
    borderColor: colors.black_00,
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
  },
  paginationDots: {
    width: wp('8%'),
    height: wp('2.5%'),
    borderRadius: wp('3%'),
    marginHorizontal: wp('2%'),
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    borderColor: colors.green_2F,
    borderWidth: wp('0.5%'),
    ...baseStyle.iconStyle(wp('3.7%')),
    borderRadius: wp('5%'),
    padding: wp('2%'),
  },
  signInWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%'),
  },
  line: {
    flex: 1,
    height: wp('0.1%'),
    backgroundColor: colors.grey_32,
    marginHorizontal: wp('2%'),
  },
  socialBtn: {
    ...baseStyle.cardElevationStyle(),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white_FF,
    borderRadius: wp('2%'),
    paddingVertical: hp('2%'),
    marginHorizontal: wp('1.5%'),
  },
  socialButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  input: {
    borderColor: colors.grey_D9,
  },
});

export default styles;
