import {StyleSheet} from 'react-native';
import {colors} from '../../constant/theme';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: widthPercentageToDP('60%'),
    height: widthPercentageToDP('60%'),
    resizeMode: 'contain',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  skipButton: {
    backgroundColor: colors.white,
    borderRadius: widthPercentageToDP('3%'),
    paddingVertical: widthPercentageToDP('3%'),
    paddingHorizontal: widthPercentageToDP('5%'),
    borderWidth: widthPercentageToDP('0.1%'),
    borderColor: colors.black,
  },
  nextButton: {
    backgroundColor: colors.orange,
    borderRadius: widthPercentageToDP('3%'),
    paddingVertical: widthPercentageToDP('3%'),
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  paginationDots: {
    width: widthPercentageToDP('8%'),
    height: widthPercentageToDP('2.5%'),
    borderRadius: widthPercentageToDP('3%'),
    marginHorizontal: widthPercentageToDP('2%'),
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
});

export default styles;
