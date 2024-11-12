import React from 'react';
import {Image, Text, View} from 'react-native';

// navigation

//packages
import PropTypes from 'prop-types';

// components

// constant
import {baseStyle, colors, sizes} from '../../constant/theme';
import styles from './styles';
import Spacer from '../spacer';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const PopUp = props => {
  //props
  const {icon, title, disc} = props;

  return (
    <View style={styles.subContainer}>
      <Image source={icon} style={styles.image} />
      <Spacer height={heightPercentageToDP('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterMedium(sizes.size4, colors.secondaryGrey),
        ]}>
        {title}
      </Text>
      <Spacer height={heightPercentageToDP('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size2, colors.secondaryGrey),
          styles.texAlign
        ]}>
        {disc}
      </Text>
    </View>
  );
};

PopUp.propTypes = {
  route: PropTypes.shape({}),
};

export default PopUp;
