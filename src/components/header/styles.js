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
  leftContainer_type2: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
  },
  titleText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default styles;
