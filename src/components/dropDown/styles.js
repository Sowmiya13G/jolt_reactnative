import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleContainer: {
    width: '100%',
    backgroundColor: colors.white_FB,
    height: hp('6%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.grey_DB,
    borderRadius: wp('2'),
    borderWidth: 1,
  },
  dropdownContainer: {
    width: '100%',
    borderColor: colors.grey_DB,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: wp('2%'),
    backgroundColor: colors.white_FB,
    borderRadius: wp('2'),
    borderWidth: 1,
    borderTopWidth: 0,
  },
  dropdownTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  placeholder: {
    ...baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_37),
    flex: 1,
    paddingLeft:"5%"
  },
  nodataText: {
    flex: 1,
    ...baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_00),
    textAlign: 'center',
  },

  // img styles
  dropdownIcon: {
    ...baseStyle.iconStyle('5%'),
    resizeMode: 'contain',
    marginLeft: '3%',
  },
  selectedIcon: {
    ...baseStyle.iconStyle('5%'),
    resizeMode: 'contain',
  },
  rotate90Deg: {
    transform: [{rotate: '-180deg'}],
  },

  oBottonBorderRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  // view type
  label: {
    marginHorizontal: wp('2%'),
  },
  blackColor: {
    color: colors.black_00,
  },
  fields: {
    backgroundColor: colors.fieldGray,
    borderRadius: wp('2%'),
    padding: '2%',
  },
  errorField: {
    borderColor: colors.red,
    borderRadius: wp('2.5%'),
    borderWidth: wp('0.2%'),
    padding: '2%',
  },
  marginHorizontal: {marginHorizontal: wp('0.5%')},
  errTextInput: {
    borderColor: colors.red,
    borderWidth: 1,
  },
});

export default styles;
