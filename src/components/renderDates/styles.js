import {Platform, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  view: isSelected => ({
    marginHorizontal:Platform?.OS == 'ios' ? wp('1%') : wp('0.6%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: Platform?.OS == 'ios' ? wp('2.5%') : wp('2%'),
    backgroundColor: isSelected ? colors.green_2F : colors.white_FF,
    borderColor: isSelected ? colors.green_2F : colors.black_00,
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp('0.1%'),
    marginBottom: wp('2.5%'),
  }),
  tripView: isSelected => ({
    marginHorizontal:Platform?.OS == 'ios' ? wp('1%') : wp('0.5%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: Platform?.OS == 'ios' ? wp('2.5%') : wp('1.7%'),
    backgroundColor: isSelected ? colors.green_2F : colors.white_FF,
    borderColor: isSelected ? colors.green_2F : colors.black_00,
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp('0.2%'),
    marginBottom: wp('2.5%'),
  }),
  calenderIcon: isSelected => ({
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'contain',
    tintColor: isSelected ? colors.white_FF : colors.black_00,
  }),
  icon: isSelected => ({
    ...baseStyle.iconStyle('2.5%'),
    resizeMode: 'contain',
    tintColor: isSelected ? colors.white_FF : colors.black_00,
  }),
  arrowIcon: isSelected => ({
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'contain',
    tintColor: isSelected ? colors.white_FF : colors.black_00,
  }),
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    borderRadius: wp('6%'),
  },
});

export default styles;
