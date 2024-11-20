// Wallet Screen Styles
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
    backgroundColor: colors.white_FF,
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
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_DB,
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
    backgroundColor: colors.grey_32,
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
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_DB,
  },
});

export default styles;
