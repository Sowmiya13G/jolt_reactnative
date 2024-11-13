import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  view: isSelected => ({
    marginHorizontal: wp('1%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: isSelected ? colors.green : colors.white,
    borderColor: isSelected ? colors.green : colors.black,
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp('0.1%'),
  }),
  icon: isSelected => ({
    ...baseStyle.iconStyle('4.5%'),
    resizeMode: 'contain',
    tintColor: isSelected ? colors.white : colors.black,
  }),
});

export default styles;
