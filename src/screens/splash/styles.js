import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.splashGreen,
  },
  splashImg: {
    ...baseStyle.iconStyle('30%'),
    resizeMode: 'contain',
  },
  loaderContainer: {
    width: '60%',
    height: 5,
    backgroundColor: colors.lightGrey,
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.white,
  },
});

export default styles;
