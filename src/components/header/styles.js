import {StyleSheet} from 'react-native';
//package
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    padding: wp('2%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
    alignContent: 'center',
  },
  leftContainer_type2: {},
  titleText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('5%'),
  },
  leftIconStyle: {
    ...baseStyle.iconStyle(wp('1%')),
    padding: wp('5%'),
    borderRadius: wp('5%'),
    backgroundColor: colors.grey,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageOnboarding: {
    width: wp('5.5%'),
    height: wp('5.5%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  leftIconView: {
    ...baseStyle.iconStyle(wp('1%')),
    padding: wp('5%'),
    borderRadius: wp('5%'),
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  horizontalLine: {
    height: wp('0.3%'),
    backgroundColor: colors.lineGrey,
  },
  notificationView: {
    marginRight: wp('3%'),
    backgroundColor: colors.white,
    padding: '2%',
    borderRadius: wp('2%'),
    ...baseStyle.cardElevationStyle(),
  },
  notificationIcon: {
    ...baseStyle.iconStyle('5%'),
    resizeMode: 'contain',
  },
});

export default styles;
