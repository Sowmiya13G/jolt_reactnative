import React from 'react';
import {Image, Text, View} from 'react-native';

// packages
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import Spacer from '../../spacer';
// components

//constants
import {iconPathURL} from '../../../constant/iconpath';
import {baseStyle, colors, sizes} from '../../../constant/theme';

//style
import styles from './styles';

//constant

const ReviewCard = props => {
  //props
  const {data} = props;

  const pointsArray = Array.from(
    {length: 5},
    (_, index) => index < data?.points,
  );
  const getTintColor = filled => {
    return filled ? colors.yellow_00 : colors.grey_DD;
  };

  return (
    <>
      <View style={styles.viewContainer}>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
          ]}>
          {data?.name}
        </Text>
        <Spacer height={hp('1%')} />
        <View style={styles.row}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size011,
                colors.black_23,
              ),
            ]}>
            {data?.comment}
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size011,
                colors.black_23,
              ),
            ]}>
            {data?.date}
          </Text>
        </View>
        <Spacer height={hp('1%')} />
        <View style={styles.rowView}>
          {pointsArray.map((filled, index) => (
            <Image
              key={index}
              source={iconPathURL?.point}
              style={[styles.point, {tintColor: getTintColor(filled)}]}
            />
          ))}
          <Spacer width={widthPercentageToDP('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size02,
                colors.black_23,
              ),
            ]}>
            {data?.points}
          </Text>
        </View>
      </View>
      <Spacer height={hp('1%')} />
    </>
  );
};

ReviewCard.propTypes = {
  data: PropTypes.object,
};

export default ReviewCard;
