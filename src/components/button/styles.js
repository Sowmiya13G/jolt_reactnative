import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: wp('4%'),
    paddingLeft: wp('4%'),
    borderRadius: widthPercentageToDP('9%'),
  },
  icon: {
    width: wp('5.5%'),
    height: wp('5.5%'),
    resizeMode: 'contain',
  },
  iconRight: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: 'contain',
  },
});

export default styles;
