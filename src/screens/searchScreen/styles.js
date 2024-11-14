import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
    backgroundColor: colors.white,
  },
  texAlign: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.ghostWhite,
    borderColor: colors.borderLightGrey,
  },
  inputStyle: {
    paddingLeft: wp('5%'),
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
    backgroundColor: colors.secondaryGrey,
    marginHorizontal: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'cover',
  },
  unCheck: {
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'contain',
  },
  dropDown: {
    backgroundColor: colors.ghostWhite,
    borderColor: colors.borderLightGrey,
  },
  horizontalLine: {
    height: wp('0.3%'),
    backgroundColor: colors.borderLightGrey,
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
    marginHorizontal: wp('15%'),
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white),
    marginLeft: wp('3%'),
  },
  location: {
    ...baseStyle.iconStyle('7%'),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp('2.5%'),
    justifyContent: 'space-between',
    paddingHorizontal:wp("2%")
  },
});

export default styles;
