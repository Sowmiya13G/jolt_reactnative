import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';

// Packages
import PropTypes from 'prop-types';
import {Calendar} from 'react-native-calendars';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';
import Button from '../button';
import Spacer from '../spacer';
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

  const handleDayPress = day => {
    setDate(day.dateString);
    setShowCalenderModal(false);
  };

  const today = getTodayDate();

  return (
    <Modal
      visible={showCalenderModal}
      transparent
      animationType="fade"
      onRequestClose={() => setShowCalenderModal(false)}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size4, colors.black),
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
          <Spacer height={hp('2%')} />
          <Calendar
            current={currentMonth}
            onDayPress={handleDayPress}
            firstDay={1}
            markedDates={{
              [today]: {
                selected: true,
                selectedColor: colors.borderGrey,
              },
              [date]: {
                selected: true,
                selectedColor: colors.green,
                customStyles: {
                  text: {
                    color: colors.white,
                    fontWeight: 'bold',
                  },
                },
              },
            }}
            theme={styles.calendarThemeStyles}
            minDate={today}
            onMonthChange={month => setCurrentMonth(month.dateString)}
          />
          <View style={styles.horizontalLine} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '48%', backgroundColor: 'red'}}>
              <Button
                onPress={() => {}}
                text={strings.call}
                textColor={colors.black}
                buttonStyle={[styles.mobNoBtn, {width: '48%'}]}
                textStyle={baseStyle.txtStyleOutInterRegular(
                  sizes.size2,
                  colors.black,
                )}
              />
            </View>
            <Button
              onPress={() => {}}
              text={strings.call}
              textColor={colors.black}
              buttonStyle={[styles.mobNoBtn, {width: '48%'}]}
              textStyle={baseStyle.txtStyleOutInterRegular(
                sizes.size2,
                colors.black,
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
