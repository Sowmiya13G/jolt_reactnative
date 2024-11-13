import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

// navigation
import NavigationService from '../../navigation/NavigationService';

//packages
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import DropDown from '../../components/dropDown';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constant
import {SCREENS} from '../../constant';
import {iconPathURL} from '../../constant/iconpath';
import {genderData, registerScreenFields} from '../../constant/staticData';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from './styles';

const initialData = {
  firstName: '',
  middleName: '',
  gender: null,
  dob: null,
  email: '',
  phoneNo: '',
};
const RegisterScreen = props => {
  //props
  const {} = props.route.params;

  const [data, setData] = useState(initialData);
  const [errData, setErrData] = useState(initialData);
  const [check, setCheck] = useState(false);

  const renderInputFields = () => {
    return registerScreenFields.map((field, index) => (
      <View key={index}>
        {field?.placeHolder == 'Gender' ? (
          <>
            <DropDown
              editable={true}
              enabelLocalSearch={true}
              placeholder={field.placeHolder}
              dropdownData={genderData}
              value={data[index]}
              onSelectItem={item => {}}
              onTypingEnd={() => {}}
              customStyle={styles.dropDown}
            />
            <Spacer height={hp('2%')} />
          </>
        ) : (
          <>
            <TextInputComponent
              value={data[index]}
              placeholder={field.placeHolder}
              icon={field.rightIcon ? field.rightIcon : field.leftIcon}
              suffix={field.rightIcon ? field.rightIcon : false}
              headerColor={colors.placeHolderTextColor}
              placeHolderTextColor={colors.placeHolderColor}
              CustomStyle={styles.input}
              errText={errData[field.placeHolder.toLowerCase()]}
              onChangeText={text =>
                handleInputChange(
                  field.placeHolder.toLowerCase().replace(/\s+/g, ''),
                  text,
                )
              }
              customInputStyle={field.rightIcon && styles.inputStyle}
            />
            <Spacer height={hp('2%')} />
          </>
        )}
      </View>
    ));
  };

  const renderBody = () => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('7%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.black),
            styles.texAlign,
          ]}>
          {strings.createAcc}
        </Text>
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black),
            styles.texAlign,
          ]}>
          {strings.joinUs}
        </Text>
        <Spacer height={hp('4%')} />
        {renderInputFields()}
        <Spacer height={hp('3%')} />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={styles.icon}>
            <Image
              source={check ? iconPathURL.check : iconPathURL?.unCheck}
              style={check ? styles.check : styles?.unCheck}
            />
          </TouchableOpacity>
          <Spacer width={widthPercentageToDP('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.darkGrey),
              styles.texAlign,
            ]}>
            {strings.iAgree}{' '}
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.blue),
              ]}>
              {strings.policy}{' '}
            </Text>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size02,
                  colors.darkGrey,
                ),
              ]}>
              {strings.and}{' '}
            </Text>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.blue),
              ]}>
              {strings.terms}
            </Text>
          </Text>
        </View>
        <Spacer height={hp('2%')} />
        <Button
          onPress={() => {
            NavigationService.navigate(SCREENS.OTP_SCREEN, {
              type: strings.forgotPasswordTitle,
            });
          }}
          text={strings.register}
          textColor={colors.white}
          buttonStyle={styles.button}
          textStyle={baseStyle.txtStyleOutInterMedium(
            sizes.size2,
            colors.white,
          )}
        />
        <View style={styles.signInWithContainer}>
          <View style={styles.line} />
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(
                sizes.size02,
                colors.secondaryGrey,
              ),
            ]}>
            {strings.or}
          </Text>
          <View style={styles.line} />
        </View>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.textGrey),
            styles.texAlign,
          ]}>
          {strings.alreadyHaveAcc}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.orange),
            ]}>
            {strings.login}
          </Text>
        </Text>
        <Spacer height={hp('2%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white}>
      <FlatList
        data={['FORGOT_PASSWORD']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
    </CustomSafeArea>
  );
};

RegisterScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default RegisterScreen;
