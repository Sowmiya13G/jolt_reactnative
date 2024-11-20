import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  markedDatesStyles: {
    selected: true,
    selectedColor: colors.green_2F,
    selectedTextColor: colors.white_FF,
    customStyles: {
      container: {
        backgroundColor: colors.black_00,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        ...baseStyle.txtStyleOutInterBold(sizes.size2, colors.white_FF),
        margin: '3%',
      },
    },
  },
  calendarThemeStyles: {
    todayTextColor: colors.black_00,
    dayTextColor: colors.black_00,
    textDisabledColor: colors.black_00,
    arrowColor: colors.black_00,
    monthTextColor: colors.black_00,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '400',
    textDayFontSize: sizes.size2,
    textMonthFontSize: sizes.size2,
    textDayHeaderFontSize: sizes.size2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '87%',
    paddingVertical: wp('2%'),
    backgroundColor: colors.white_FF,
    alignItems: 'center',
    borderRadius: wp('8%'),
    paddingHorizontal:"2.5%"
  },
  horizontalLine: {
    height: wp('0.4%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: wp('2%'),
  },
  date: {
    alignSelf: 'flex-start',
    paddingHorizontal: wp('4%'),
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('10%'),
  },
  leftArrow: {
    ...baseStyle.iconStyle('3%'),
  },
  rightArrow: {
    ...baseStyle.iconStyle('3%'),
  },
  customHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: wp('4%'),
    width: '100%',
  },
  arrowsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  okBtn: {
    backgroundColor: colors.orange,
    borderRadius: wp('3%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('4%'),
  },
  cancelBtn: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('3%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('4%'),
    borderWidth: wp('0.1%'),
    borderColor: colors.black_00,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: wp('5%'),
    gap: wp('5%'),
    marginVertical: wp('4%'),
  },
});

export default styles;
