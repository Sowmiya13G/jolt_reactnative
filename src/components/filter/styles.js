import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white_FF,
    paddingVertical: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: isSelected => ({
    marginHorizontal: wp('1%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('2.5%'),
    backgroundColor: isSelected ? colors.green_D6 : colors.grey_F1,
    borderColor: colors.transparent,
    borderRadius: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
  }),
  iconView: {
    paddingHorizontal: '2.5%',
  },
  icon: {
    ...baseStyle.iconStyle('5.5%'),
    resizeMode: 'contain',
  },
});

export default styles;
