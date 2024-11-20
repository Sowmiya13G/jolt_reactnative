import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  horizontalLine: {
    height: wp('0.3%'),
    backgroundColor: colors.grey_DB,
  },
  location: {
    ...baseStyle.iconStyle('7%'),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp('2.5%'),
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scrollView: {
    backgroundColor: colors.white_FF,
    width: '100%',
    height: heightPercentageToDP('50%'),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.white_FF,
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '55%',
    paddingVertical: wp('5%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  cancel: {
    ...baseStyle.iconStyle('4%'),
    tintColor: colors.black_00,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default styles;
