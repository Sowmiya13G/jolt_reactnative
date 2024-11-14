import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';

// packages
import PropTypes from 'prop-types';
import {widthPercentageToDP} from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';
import CalenderComponent from '../calender';

// constants
import {iconPathURL} from '../../constant/iconpath';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from './styles';

const RenderDates = ({data, isDates, isTrips}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [modalDate, setModalDate] = useState(null);

  // Handle selecting a date from the calendar
  const handleCalendarSelect = selectedDate => {
    setModalDate(selectedDate);
    setShowCalendar(false);
    setSelectedDate(selectedDate);
  };

  const handleSelect = item => {
    setSelectedDate(item);
  };

  const renderItem = ({item}) => {
    const isSelected = selectedDate?.date === item.date;
    const isLastItem = data.length - 1 === item.index;
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={styles.view(isSelected)}>
        {isLastItem && (
          <>
            <TouchableOpacity onPress={() => setShowCalendar(true)}>
              <Image
                source={iconPathURL.calender}
                style={styles.icon(isSelected)}
              />
            </TouchableOpacity>
            <Spacer width={widthPercentageToDP('1%')} />
          </>
        )}
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              sizes.size011,
              isSelected ? colors.white : colors.textBlack,
            ),
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTrips = ({item}) => {
    const isSelected = selectedDate?.id === item.id;
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={styles.view(isSelected)}>
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              sizes.size011,
              isSelected ? colors.white : colors.textBlack,
            ),
          ]}>
          {item.from}
        </Text>
        <Spacer width={widthPercentageToDP('1%')} />
        <Image
          source={iconPathURL.arrow}
          style={styles.arrowIcon(isSelected)}
        />
        <Spacer width={widthPercentageToDP('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              sizes.size011,
              isSelected ? colors.white : colors.textBlack,
            ),
          ]}>
          {item.to}
        </Text>
        <Spacer width={widthPercentageToDP('1%')} />
        <Image source={iconPathURL.cancel} style={styles.icon(isSelected)} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={
          isDates
            ? data?.map((item, index) => ({
                ...item,
                date:
                  index === data.length - 1
                    ? modalDate || item.date
                    : item.date,
              }))
            : data
        }
        renderItem={isDates ? renderItem : renderTrips}
        keyExtractor={item =>
          item.id?.toString() || item.date || item.label || `${Math.random()}`
        }
        horizontal={!isTrips}
        numColumns={isTrips ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: isTrips ? 10 : 0}}
      />
      {Boolean(showCalendar) && (
        <CalenderComponent
          date={modalDate || new Date().toISOString().split('T')[0]}
          setDate={handleCalendarSelect}
          showCalenderModal={showCalendar}
          setShowCalenderModal={setShowCalendar}
        />
      )}
    </>
  );
};

RenderDates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      index: PropTypes.number,
    }),
  ).isRequired,
};

export default RenderDates;
