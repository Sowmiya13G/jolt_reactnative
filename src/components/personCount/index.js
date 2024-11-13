import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// packages
import PropTypes from 'prop-types';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

//constants
import { iconPathURL } from '../../constant/iconpath';
import { dashboard } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

//style
import styles from './styles';

//constant

const PersonCount = props => {
  //props
  const {count, setCount} = props;

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.row}>
        <Image
          source={count > 1 ? iconPathURL.team : iconPathURL.person}
          style={styles.icon}
        />
        <Spacer width={widthPercentageToDP('2%')} />
        <Text
          style={[baseStyle.txtStyleOutInterMedium(sizes.size3, colors.black)]}>
          {count}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black),
            ]}>
            {count > 1 ? dashboard.persons : dashboard.person}
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={decreaseCount} style={styles.button}>
          <Image source={iconPathURL.minus} style={styles.buttonIcon} />
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity onPress={increaseCount} style={styles.button}>
          <Image source={iconPathURL.plus} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

PersonCount.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default PersonCount;
