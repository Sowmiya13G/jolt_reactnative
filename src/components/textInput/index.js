import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

// packages
import PropTypes from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

//constant
import { iconpathurl } from '../../constant/iconpath';
import { strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

//style
import styles from './styles';

const TextInputComponent = props => {
  //props
  const {
    icon,
    type,
    label,
    error,
    verification,
    labelColor = colors.secondaryGrey,
    labelTextSize = '1.8%',
    placeholder = strings.enterHere,
    placeHolderTextColor = colors.placeHolderTextColor,
    defaultValue,
    maxLength,
    keyboardType,
    value,
    onSubmit,
    onChangeText,
    secureTextEntry = false,
    editable = true,
    CustomStyle,
    textAlignVertical,
    suffix = false,
    autoCapitalize,
    errText,
    showErrText,
    customErrTextStyle,
    CustomStyle1,
    isReq,
    viewType,
    isDisabled = false,
    onTypingEnd,
    customInputStyle,
    onFocus,
  } = props;

  const [show, setShow] = useState(secureTextEntry);

  return (
    <>
      {label && (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, labelColor),
            ]}>
            {label}
          </Text>
          <Spacer height={hp('1%')} />
        </>
      )}
      <View
        style={[
          styles.textInputView,
          styles.ro_textInputView,
          {
            ...(Boolean(errText) && {borderColor: colors.red}),
          },
          CustomStyle,
        ]}>
        {Boolean(icon) && !suffix && (
          <Image source={icon} style={styles.icon} />
        )}

        <TextInput
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black),
            styles.textInput,
            {flex: Boolean(icon) ? 0.87 : 1},
            customInputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeHolderTextColor}
          defaultValue={defaultValue}
          maxLength={maxLength}
          keyboardType={keyboardType}
          value={value}
          onSubmitEditing={onSubmit}
          onChangeText={text => {
            Boolean(onChangeText) && onChangeText(text);
          }}
          secureTextEntry={show}
          editable={editable}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
        />
        {Boolean(icon) && suffix && (
          <Image source={icon} style={styles.rightIcon} />
        )}
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.secureTextIconView}
            onPress={() => handleShow(!show)}>
            <Image
              source={!show ? iconpathurl.eyeIcon : iconpathurl.eyeCross}
              style={styles.secureTextIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

TextInputComponent.propTypes = {
  icon: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  verification: PropTypes.bool,
  labelColor: PropTypes.string,
  labelTextSize: PropTypes.string,
  placeholder: PropTypes.string,
  placeHolderTextColor: PropTypes.string,
  defaultValue: PropTypes.string,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  editable: PropTypes.bool,
  CustomStyle: PropTypes.object,
  textAlignVertical: PropTypes.string,
  suffix: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  errText: PropTypes.string,
  showErrText: PropTypes.bool,
  customErrTextStyle: PropTypes.object,
  CustomStyle1: PropTypes.object,
  isReq: PropTypes.bool,
  viewType: PropTypes.string,
  isDisabled: PropTypes.bool,
  onTypingEnd: PropTypes.func,
  customInputStyle: PropTypes.object,
};

TextInputComponent.defaultProps = {
  labelColor: colors.secondaryGrey,
  labelTextSize: '1.8%',
  placeholder: strings.enterHere,
  placeHolderTextColor: colors.placeHolderTextColor,
  secureTextEntry: false,
  editable: true,
  suffix: false,
  isDisabled: false,
};


export default TextInputComponent;
