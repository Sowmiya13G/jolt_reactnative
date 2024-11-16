import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

// packages
import PropTypes from 'prop-types';

// components

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';
//utils
// styles
import styles from './styles';
import {iconPathURL} from '../../constant/iconpath';

const FilterList = ({data, onSelectionChange = () => {}, reset = () => {}}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // -------------------------------------------- FUNCTIONALITIES --------------------------------------------

  const handleSelect = item => {
    if (selectedItems.some(selectedItem => selectedItem?.id === item?.id)) {
      const newSelectedItems = selectedItems.filter(
        selectedItem => selectedItem?.id !== item?.id,
      );
      setSelectedItems(newSelectedItems);
      onSelectionChange(newSelectedItems);
    } else {
      const newSelectedItems = [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      onSelectionChange(newSelectedItems);
    }
  };

  // -------------------------------------------- RENDER UI --------------------------------------------

  const renderItem = ({item}) => {
    const isSelected = selectedItems.some(
      selectedItem => selectedItem?.id === item?.id,
    );

    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={styles.view(isSelected)}>
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size011, colors.textBlack),
          ]}>
          {item?.label || '--'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          setSelectedItems([]);
          reset();
        }}>
        <Image source={iconPathURL.filter} style={styles.icon} />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id?.toString() || `${Math?.random()}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

FilterList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      date: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  onSelectionChange: PropTypes.func,
  reset: PropTypes.func,
};

export default FilterList;
