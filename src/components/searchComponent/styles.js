import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.lightWhite,
    borderColor: colors.boldBorderGrey,
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('4%'),
    borderWidth: wp('0.3%'),
    borderRadius: wp('5%'),
  },
  input: {
    height: hp('5%'),
    marginHorizontal: wp('2%'),
    borderColor: colors.transparent,
  },
  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('10%'),
    height: hp('3%'),
  },
  horizontalLine: {
    height: wp('0.3%'),
    width: '90%',
    backgroundColor: colors.boldBorderGrey,
    marginRight: wp('1%'),
  },
  swapIcon: {
    ...baseStyle.iconStyle('6%'),
    resizeMode: 'contain',
  },
  arrowView: {
    padding: '4%',
    backgroundColor: colors.paleGreen,
    borderRadius: wp('6%'),
  },
});

export default styles;
