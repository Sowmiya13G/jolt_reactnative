import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// packages
import PropTypes from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import Button from '../../button';
import Spacer from '../../spacer';

//constants
import { iconPathURL } from '../../../constant/iconpath';
import { baseStyle, colors, sizes } from '../../../constant/theme';

//style
import styles from './styles';

//constant

const TicketCard = props => {
  //props
  const {data, selectSeat = () => {}, viewReview = () => {}} = props;

  const [selectedType, setSelectedType] = useState(null);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.seatsView}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.white),
          ]}>
          {data?.seatsLeft} Seats Left
        </Text>
      </View>
      <View style={[styles.row]}>
        {data?.label?.map((x, y) => (
          <View key={y} style={styles.textView}>
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size011,
                  colors.textBlack,
                ),
              ]}>
              {x}
            </Text>
          </View>
        ))}
      </View>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.midGrey),
          styles.paddingHorizontal,
        ]}>
        {data.name}
      </Text>
      <Spacer height={hp('1%')} />
      <View style={[styles.row]}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.darkGrey2),
          ]}>
          {data.timePeriod[0]}
        </Text>
        <View style={styles.horizontalLine} />
        <View style={styles.duration}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.midGrey),
            ]}>
            {data.duration}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.darkGrey2),
          ]}>
          {data.timePeriod[1]}
        </Text>
      </View>
      <Spacer height={hp('2%')} />
      <View style={[styles.row]}>
        {data?.types.map((x, y) => {
          const isSelected = x.type === selectedType;
          return (
            <TouchableOpacity
              key={y}
              style={styles.typesView(isSelected)}
              onPress={() => setSelectedType(x?.type)}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size02,
                    isSelected ? colors.black : colors.midGrey,
                  ),
                ]}>
                {`${x?.type} (${x?.seats})`}
              </Text>
              <Text
                style={[
                  baseStyle.txtStyleOutInterBold(
                    sizes.size02,
                    isSelected ? colors.black : colors.midGrey,
                  ),
                ]}>
                {`$ ${x?.price}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.horizontalLineView} />
      <Spacer height={hp('1%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterBold(sizes.size3, colors.secondaryGrey),
          styles.endAlign,
        ]}>
        INR200
      </Text>
      <Spacer height={hp('1.5%')} />
      <View style={styles.footerView}>
        <View style={styles.review}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.darkGrey2),
            ]}>
            Reviews{' '}
          </Text>
          <View style={styles.borderRadius}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size011,
                  colors.secondaryBlack,
                ),
              ]}>
              {data.review}
            </Text>
          </View>
          <TouchableOpacity onPress={viewReview}>
            <Image source={iconPathURL.dropdown} style={styles.dropdown} />
          </TouchableOpacity>
        </View>
        <Button
          onPress={selectSeat}
          text={'Select Seat'}
          buttonStyle={styles.button}
          textStyle={baseStyle.txtStyleOutInterSemiBold(
            sizes.size02,
            colors.white,
          )}
        />
      </View>
    </View>
  );
};

TicketCard.propTypes = {
  data: PropTypes.shape({
    seatsLeft: PropTypes.string,
    label: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    timePeriod: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        seats: PropTypes.string,
        price: PropTypes.string,
      }),
    ),
    review: PropTypes.string,
  }),
  selectSeat: PropTypes.func,
  viewReview: PropTypes.func,
};

export default TicketCard;
