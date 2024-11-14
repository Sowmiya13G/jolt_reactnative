import React, {useState} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';

// packages
import PropTypes from 'prop-types';

// components
import TextInputComponent from '../textInput';

//constant
import {iconPathURL} from '../../constant/iconpath';
import {colors} from '../../constant/theme';

//style
import styles from './styles';

const SearchComponent = props => {
  //props
  const {
    fromValue,
    toValue,
    fromPlaceHolder,
    toPlaceHolder,
    swapLocation = () => {},
    onChangeFromLocation = () => {},
    onChangeToLocation = () => {},
    onFocusChange = () => {},
  } = props;

  const [rotation, setRotation] = useState(new Animated.Value(0));
  const [focusedInput, setFocusedInput] = useState(null);

  // Interpolate the rotation value
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // Function to animate the swap icon
  const rotateIcon = () => {
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: rotation._value === 0 ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleSwapLocation = () => {
    rotateIcon();
    swapLocation();
  };

  const handleFocus = inputName => {
    setFocusedInput(inputName);
    onFocusChange(inputName);
  };

  return (
    <View style={styles.viewContainer}>
      <TextInputComponent
        value={fromValue}
        headerColor={colors.placeHolderTextColor}
        placeholder={fromPlaceHolder}
        CustomStyle={styles.input}
        placeHolderTextColor={colors.placeHolderColor}
        icon={iconPathURL.current}
        onChangeText={onChangeFromLocation}
        onFocus={() => handleFocus('from')}
        isFocused={focusedInput === 'from'}
      />
      <View style={styles.lineView}>
        <View style={styles.verticalLine} />
        <View style={styles.horizontalLine} />
        <TouchableOpacity style={styles.arrowView} onPress={handleSwapLocation}>
          <Animated.Image
            source={iconPathURL.arrowSwap}
            style={[
              styles.swapIcon,
              {transform: [{rotate: rotateInterpolate}]},
            ]}
          />
        </TouchableOpacity>
      </View>
      <TextInputComponent
        value={toValue}
        headerColor={colors.placeHolderTextColor}
        placeholder={toPlaceHolder}
        CustomStyle={styles.input}
        placeHolderTextColor={colors.placeHolderColor}
        icon={iconPathURL.destination}
        onChangeText={onChangeToLocation}
        onFocus={() => handleFocus('to')}
        isFocused={focusedInput === 'to'}
      />
    </View>
  );
};

SearchComponent.propTypes = {
  fromValue: PropTypes.string.isRequired,
  toValue: PropTypes.string.isRequired,
  fromPlaceHolder: PropTypes.string.isRequired,
  toPlaceHolder: PropTypes.string.isRequired,
  swapLocation: PropTypes.func,
  onChangeFromLocation: PropTypes.func,
  onChangeToLocation: PropTypes.func,
  onFocusChange: PropTypes.func, 
};

export default SearchComponent;
