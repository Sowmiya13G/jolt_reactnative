// Search screen styles
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
    backgroundColor: colors.white_FF,
  },
  horizontalLine: {
    height: wp('0.3%'),
    backgroundColor: colors.grey_DB,
  },
  location: {
    ...baseStyle.iconStyle('7%'),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp('2.5%'),
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recent: {
    width: '100%',
  },
});

export default styles;
