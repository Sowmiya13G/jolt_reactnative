import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:wp('3%')
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'contain',
    tintColor: colors.black_00,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.green_D6,
    borderRadius: wp('1%'),
    paddingVertical: wp('2%'),
  },
  button: {
    backgroundColor: colors.primary, 
    paddingVertical: wp('1%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('2%'),
    marginHorizontal: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'contain',
    tintColor: colors.green_63C,
  },
  verticalLine: {
    width: 1,
    backgroundColor: colors.black_28,
    marginVertical: wp('0.5%'),
  },
});

export default styles;
