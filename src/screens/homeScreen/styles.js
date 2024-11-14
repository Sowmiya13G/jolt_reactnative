import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
    backgroundColor: colors.white,
  },
  horizontalLine: {
    height: wp('0.2%'),
    backgroundColor: colors.borderLightGrey,
  },
  texAlign: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
    marginHorizontal: wp('15%'),
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white),
    marginLeft: wp('3%'),
  },
});

export default styles;
