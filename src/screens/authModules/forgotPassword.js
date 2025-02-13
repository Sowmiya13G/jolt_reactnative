import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

// navigation
import NavigationService from '../../navigation/NavigationService';

//packages
import PropTypes from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constant
import { SCREENS } from '../../constant';
import { iconPathURL } from '../../constant/iconpath';
import { strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from '../styles/forgotPassword';

const ForgotPasswordScreen = props => {
  //props
  const {type} = props.route.params;

  const [data, setData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errData, setErrData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const isForgotPasswordScreen = type == strings.forgotPasswordTitle;
  const isNewPasswordScreen = type == strings.createNewPassword;

  const renderBody = () => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('10%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.black_22),
            styles.texAlign,
          ]}>
          {isForgotPasswordScreen
            ? strings.forgotPasswordTitle
            : strings.createNewPassword}
        </Text>
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_22),
            styles.texAlign,
          ]}>
          {isForgotPasswordScreen
            ? strings.forgotPasswordDisc
            : strings.enterDifPassword}
        </Text>
        <Spacer height={hp('2%')} />
        {isForgotPasswordScreen ? (
          <TextInputComponent
            value={data?.email}
            headerColor={colors.grey_95}
            errText={errData?.email}
            labelColor={colors.grey_32}
            placeholder={strings.email}
            icon={iconPathURL.email}
          />
        ) : (
          <>
            <TextInputComponent
              value={data?.newPassword}
              headerColor={colors.grey_95}
              errText={errData?.newPassword}
              placeholder={strings.password}
              icon={iconPathURL.lock}
              CustomStyle={styles.input}
              grey_95={colors.grey_7F}
            />
            <Spacer height={hp('2%')} />
            <TextInputComponent
              value={data?.confirmPassword}
              headerColor={colors.grey_95}
              errText={errData?.confirmPassword}
              placeholder={strings.confirmPassword}
              icon={iconPathURL.lock}
              CustomStyle={styles.input}
              grey_95={colors.grey_7F}
            />
          </>
        )}
        <Spacer height={hp('3%')} />
        <Button
          onPress={() => {
            isForgotPasswordScreen
              ? NavigationService.navigate(SCREENS.OTP_SCREEN, {
                  type: strings.forgotPasswordTitle,
                })
              : NavigationService.navigate(SCREENS.REGISTER_SCREEN, {});
          }}
          text={
            isForgotPasswordScreen ? strings.sendCode : strings.resetPassword
          }
          textColor={colors.white_FF}
          buttonStyle={styles.button}
          textStyle={baseStyle.txtStyleOutInterMedium(
            sizes.size2,
            colors.white_FF,
          )}
        />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          NavigationService.goBack();
        }}
        title={strings.forgotPasswordTitle}
        color={colors.grey_32}
        leftIcon1={iconPathURL.backArrow}
      />
      <FlatList
        data={['FORGOT_PASSWORD']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
    </CustomSafeArea>
  );
};

ForgotPasswordScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ForgotPasswordScreen;
