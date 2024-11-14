import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { baseStyle, colors, sizes } from '../../constant/theme';

const styles = StyleSheet.create({
  markedDatesStyles: {
    selected: true,
    selectedColor: colors.green,
    selectedTextColor: colors.white,
    customStyles: {
      container: {
        backgroundColor: colors.black,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        ...baseStyle.txtStyleOutInterBold(sizes.size2, colors.white),
        margin: '3%',
      },
    },
  },
  calendarThemeStyles: {
    todayTextColor: colors.black,
    dayTextColor: colors.black,
    textDisabledColor: '#d9e1e8',
    arrowColor: colors.black,
    // dotColor: colors.red,
    selectedDotColor: colors.white,
    monthTextColor: colors.black,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: sizes.size2,
    textMonthFontSize: sizes.size2,
    textDayHeaderFontSize: sizes.size3,
    width: '100%',
    padding: '3%',
    margin: '3%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    paddingVertical: wp('2%'),
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: wp('5%'),
  },
  horizontalLine: {
    height: wp('0.4%'),
    backgroundColor: colors.lineGrey,
    width: '100%',
    marginVertical: wp('2%'),
  },
  date: {
    alignSelf: 'flex-start',
    paddingHorizontal: wp('10%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    paddingHorizontal: wp('4%'),
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('10%'),
  },
  arrowText: {
    fontSize: sizes.size3,
    fontWeight: 'bold',
    color: colors.black,
  },
  leftArrow: {
    tintColor: colors.black,
  },
  rightArrow: {
    tintColor: colors.black,
  },
});

export default styles;
