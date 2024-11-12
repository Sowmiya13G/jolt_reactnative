import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginHorizontal: {
    marginHorizontal: wp('5%'),
  },
  wrapper: {
    flex: 1,
    alignSelf: 'center',
  },
  textAlign: {
    textAlign: 'center',
  },
  imageStyle: {
    width: wp('65%'),
    height: wp('65%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
  },
  skipButton: {
    backgroundColor: colors.white,
    borderRadius: wp('3%'),
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('5%'),
    borderWidth: wp('0.1%'),
    borderColor: colors.textGrey,
    width: wp('28%'),
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('5%'),
    width: wp('28%'),
    alignItems: 'center',
  },
  paginationDots: {
    width: wp('8%'),
    height: wp('2.5%'),
    borderRadius: wp('3%'),
    marginHorizontal: wp('2%'),
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    borderColor: colors.green,
    borderWidth: wp('0.5%'),
    ...baseStyle.iconStyle(wp('3.7%')),
    borderRadius: wp('5%'),
    padding: wp('2%'),
  },
});

export default styles;
