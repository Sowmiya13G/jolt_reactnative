import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { baseStyle, colors } from '../../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginHorizontal: wp('5%'),
    backgroundColor: colors.white_FF,
    borderRadius: wp('2%'),
    paddingVertical: '4%',
    position: 'relative',
  },
  paddingHorizontal: {
    paddingHorizontal: '4%',
  },
  texAlign: {
    textAlign: 'center',
  },
  image: {
    ...baseStyle.iconStyle('40%'),
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  textView: {
    borderRadius: wp('1%'),
    borderWidth: 1,
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('0.5%'),
    marginRight: wp('1%'),
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_F1,
  },
  seatsView: {
    position: 'absolute',
    backgroundColor: colors.green_2F,
    right: 0,
    top: wp('4%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('1.5%'),
    borderTopLeftRadius: wp('4%'),
    borderBottomLeftRadius: wp('4%'),
  },
  horizontalLine: {
    height: wp('0.4%'),
    backgroundColor: colors.grey_F1,
    width: '7%',
    marginHorizontal: wp('1.5%'),
  },
  duration: {
    borderRadius: wp('1.5%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('0.5%'),
    backgroundColor: colors.grey_F1,
  },
  horizontalLineView: {
    height: wp('0.5%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
  },
  endAlign: {
    paddingHorizontal: '4%',
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('2%'),
    alignItems: 'center',
  },
  dropdown: {
    ...baseStyle.iconStyle('3%'),
    tintColor: colors.black_00,
    marginLeft:wp("1%")
  },
  review: {
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('1.3%'),
    backgroundColor: colors.grey_F1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
  },
  borderRadius: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('1%'),
    padding: wp('0.5%'),
  },
  typesView: isSelected => ({
    borderRadius: wp('3%'),
    paddingHorizontal: wp('2.5%'),
    paddingVertical: wp('2%'),
    borderColor: isSelected ? colors.orange : colors.grey_F1,
    borderWidth: wp('0.3%'),
    marginRight: wp('2%'),
  }),
});

export default styles;
