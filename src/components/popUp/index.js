import React from 'react';
import { Image, Text, View } from 'react-native';

// navigation

//packages
import PropTypes from 'prop-types';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

// constant
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from './styles';

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
          styles.texAlign,
        ]}>
        {disc}
      </Text>
    </View>
  );
};

PopUp.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
};

export default PopUp;
