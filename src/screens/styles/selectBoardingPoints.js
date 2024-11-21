// Select boarding points screen styles
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  horizontalLine: {
    height: wp('0.3%'),
    backgroundColor: colors.grey_DB,
  },
});

export default styles;
