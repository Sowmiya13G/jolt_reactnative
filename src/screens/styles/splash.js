// Splash Screen
import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green_38,
  },
  splashImg: {
    ...baseStyle.iconStyle('30%'),
    resizeMode: 'contain',
  },
  loaderContainer: {
    width: '60%',
    height: 5,
    backgroundColor: colors.grey_80,
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.white_FF,
  },
});

export default styles;
