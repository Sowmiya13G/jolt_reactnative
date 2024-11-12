import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constant/theme';

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
});

export default styles;
