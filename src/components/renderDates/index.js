import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity } from 'react-native';

// packages
import PropTypes from 'prop-types';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

// constants
import { iconPathURL } from '../../constant/iconpath';
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from './styles';

const RenderDates = ({dates}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDatePress = date => {
    setSelectedDate(date);
  };

  const renderItem = ({item}) => {
    const isSelected = selectedDate?.date === item.date;
    const isLastItem = dates?.length - 1 == item?.index;
    return (
      <TouchableOpacity
        onPress={() => handleDatePress(item)}
        style={styles.view(isSelected)}>
        {isLastItem && (
          <>
            <Image
              source={iconPathURL.calender}
              style={styles.icon(isSelected)}
            />
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

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

RenderDates.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      index: PropTypes.number,
    })
  ).isRequired,
};

export default RenderDates;
