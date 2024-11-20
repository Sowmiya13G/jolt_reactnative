import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';

// Packages
import PropTypes from 'prop-types';
import {Calendar} from 'react-native-calendars';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// constants
import {iconPathURL} from '../../constant/iconpath';
import {dashboard} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// components
import Button from '../button';
import Spacer from '../spacer';

// styles
import styles from './styles';

const CalenderComponent = ({
  date,
  setDate,
  showCalenderModal,
  setShowCalenderModal,
}) => {
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toISOString().split('T')[0],
  );

  const getTodayDate = () => new Date().toISOString().split('T')[0];

  const today = getTodayDate();

  const renderCustomHeader = date => {
    const currentMonthLabel = new Date(currentMonth).toLocaleDateString(
      'en-US',
      {
        month: 'long',
        year: 'numeric',
      },
    );

    return (
      <View style={styles.customHeaderContainer}>
        <Text
          style={[baseStyle.txtStyleOutInterBold(sizes.size3, colors.grey_55)]}>
          {currentMonthLabel}
        </Text>
        <View style={styles.arrowsContainer}>
          <TouchableOpacity
            onPress={() => {
              const prevMonth = new Date(currentMonth);
              prevMonth.setMonth(prevMonth.getMonth() - 1);
              const updatedMonth = prevMonth.toISOString().split('T')[0];
              setCurrentMonth(updatedMonth);
            }}>
            <Image source={iconPathURL.previous} style={styles.leftArrow} />
          </TouchableOpacity>
          <Spacer width={widthPercentageToDP('5%')} />

          <TouchableOpacity
            onPress={() => {
              const nextMonth = new Date(currentMonth);
              nextMonth.setMonth(nextMonth.getMonth() + 1);
              setCurrentMonth(nextMonth.toISOString().split('T')[0]);
            }}>
            <Image source={iconPathURL.next} style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal
      visible={showCalenderModal}
      transparent
      animationType="fade"
      onRequestClose={() => {}}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size4, colors.black_00),
              styles.date,
            ]}>
            {date
              ? new Date(date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })
              : new Date(today).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
          </Text>
          <Spacer height={hp('2%')} />
          <View style={styles.horizontalLine} />
          <Spacer height={hp('1%')} />
          <Calendar
            key={currentMonth}
            current={currentMonth}
            onDayPress={day => setDate(day.dateString)}
            markingType={'custom'}
            dayNamesShort={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            theme={styles.calendarThemeStyles}
            // minDate={today}
            renderHeader={() => renderCustomHeader(date)}
            hideArrows={true}
            markedDates={{
              [today]: {
                selected: true,
                customStyles: {
                  container: {
                    borderColor: colors.green_2F,
                    borderRadius: 5,
                    backgroundColor: colors.transparent,
                    borderWidth: 1,
                  },
                  text: {
                    color: colors.black_00,
                  },
                },
              },
              [date]: {
                selected: true,
                customStyles: {
                  container: {
                    backgroundColor: colors.green_2F,
                    borderRadius: 5,
                  },
                  text: {
                    color: colors.white_FF,
                  },
                },
              },
            }}
          />
          <View style={styles.horizontalLine} />

          <View style={styles.btnContainer}>
            <Button
              onPress={() => setShowCalenderModal(false)}
              text={dashboard.cancel}
              textColor={colors.black_00}
              buttonStyle={styles.cancelBtn}
              textStyle={baseStyle.txtStyleOutInterRegular(
                sizes.size2,
                colors.black_00,
              )}
            />
            <Button
              onPress={() => setShowCalenderModal(false)}
              text={dashboard.ok}
              textColor={colors.black_00}
              buttonStyle={styles.okBtn}
              textStyle={baseStyle.txtStyleOutInterMedium(
                sizes.size2,
                colors.white_FF,
              )}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

CalenderComponent.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  showCalenderModal: PropTypes.bool.isRequired,
  setShowCalenderModal: PropTypes.func.isRequired,
};

export default CalenderComponent;
