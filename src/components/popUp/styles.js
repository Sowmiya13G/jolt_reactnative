import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 0.8,
    backgroundColor: colors.white_FF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texAlign: {
    textAlign: 'center',
  },
  image: {
    ...baseStyle.iconStyle('40%'),
    resizeMode: 'contain',
  },
});

export default styles;
