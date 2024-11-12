import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

//style
import styles from './styles';

//constant
import { iconpathurl } from '../../constant/iconpath';
import { strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';
import Spacer from '../spacer';

import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

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
    customInputStyle
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
            customInputStyle
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

export default TextInputComponent;
