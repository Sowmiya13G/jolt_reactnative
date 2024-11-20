import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_DD,
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
    marginHorizontal: wp('7%'),
    height: hp('3%'),
  },
  horizontalLine: {
    height: wp('0.3%'),
    width: '80%',
    backgroundColor: colors.grey_DD,
    marginRight: wp('1%'),
  },
  swapIcon: {
    ...baseStyle.iconStyle('6%'),
    resizeMode: 'contain',
  },
  arrowView: {
    padding: '4%',
    backgroundColor: colors.green_D6,
    borderRadius: wp('6%'),
  },
  verticalLine: {
    width: 1,
    height: '100%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.grey_D9,
    marginRight: wp('2%'),
  },
});

export default styles;
