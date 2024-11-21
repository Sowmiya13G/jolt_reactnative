import React, {useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

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
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constants
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import {SCREENS} from '../../constant';
import {iconPathURL} from '../../constant/iconpath';

// styles
import styles from '../styles/loginScreen';

const LoginScreen = props => {
  //props
  const {} = props;

  // ref

  // use State
  const [data, setData] = useState({
    email: '',
    password: '',
    phoneNo: '',
  });
  const [errData, setErrData] = useState({
    email: '',
    password: '',
    phoneNo: '',
  });
  const [type, setType] = useState(0);

  const socialLogin = [
    {label: strings.google, icon: iconPathURL.google},
    {label: strings.apple, icon: iconPathURL.apple},
    {label: strings.facebook, icon: iconPathURL.facebook},
  ];

  // Functions
  const login = () => {
    NavigationService.navigate(SCREENS.FORGOT_PASSWORD, {
      type: strings.forgotPasswordTitle,
    });
  };

  const loginWithMobNo = () => {
    setType(1);
  };

  const renderSocialLoginButtons = () => {
    return (
      <View style={styles.socialButtonRow}>
        {socialLogin.map((item, index) => (
          <Button
            key={index}
            onPress={() => console.log(`Login with ${item.label}`)}
            text={item.label}
            icon={item.icon}
            spaceBetween={widthPercentageToDP('2%')}
            textColor={colors.black_00}
            buttonStyle={styles.socialBtn}
            textStyle={baseStyle.txtStyleOutInterRegular(
              sizes.size2,
              colors.black_00,
            )}
          />
        ))}
      </View>
    );
  };

  const renderBody = () => {
    return (
      <>
        <View style={styles.banner}>
          <Image source={iconPathURL.busStatic} style={styles.bus} />
        </View>
        <Spacer height={hp('2%')} />
        <View style={[styles.subContainer]}>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.black_22),
            ]}>
            {strings.loginWithUrAcc}
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size011,
                colors.grey_32,
              ),
            ]}>
            {strings.enjoyFeatures}
          </Text>
          <Spacer height={hp('2%')} />
          {type == 0 && (
            <>
              <TextInputComponent
                value={data?.email}
                label={strings.emailAddress}
                headerColor={colors.grey_95}
                errText={errData.email}
                labelColor={colors.grey_32}
                CustomStyle={styles.input}
              />
              <Spacer height={hp('2%')} />
              <TextInputComponent
                value={data?.password}
                label={strings.password}
                headerColor={colors.grey_95}
                errText={errData.password}
                labelColor={colors.grey_32}
                CustomStyle={styles.input}
              />
            </>
          )}
          {type == 1 && (
            <TextInputComponent
              value={data?.phoneNo}
              label={strings.phoneNo}
              headerColor={colors.grey_95}
              errText={errData.phoneNo}
              labelColor={colors.grey_32}
            />
          )}
          <Spacer height={hp('2%')} />
          {type == 0 && (
            <>
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(sizes.size02, colors.orange),
                  styles.textAlign,
                ]}>
                {strings.forgotPassword}
              </Text>
              <Spacer height={hp('2%')} />
            </>
          )}
          <View style={styles.buttonView}>
            <Button
              onPress={() => login()}
              text={type == 0 ? strings.login : strings.sendOTP}
              buttonStyle={styles.loginBtn}
              textStyle={baseStyle.txtStyleOutInterBold(
                sizes.size2,
                colors.white_FF,
              )}
            />
            <Spacer height={hp('2%')} />
            <Button
              onPress={() => loginWithMobNo()}
              text={
                type == 0 ? strings.loginWithMobile : strings.loginWithEmail
              }
              textColor={colors.black_00}
              buttonStyle={styles.mobNoBtn}
              textStyle={baseStyle.txtStyleOutInterRegular(
                sizes.size2,
                colors.black_00,
              )}
            />
          </View>
          <View style={styles.signInWithContainer}>
            <View style={styles.line} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size02,
                  colors.grey_7C,
                ),
              ]}>
              {strings.signInWith}
            </Text>
            <View style={styles.line} />
          </View>
          <Button
            onPress={() => console.log(`Login with ${item.label}`)}
            text={strings.google}
            icon={iconPathURL.google}
            spaceBetween={widthPercentageToDP('2%')}
            textColor={colors.black_00}
            buttonStyle={styles.socialBtn}
            textStyle={baseStyle.txtStyleOutInterRegular(
              sizes.size2,
              colors.black_00,
            )}
          />
          <Spacer height={hp('2%')} />
        </View>
      </>
    );
  };

  // render UI
  return (
    <CustomSafeArea
      style={styles.container}
      statusBarBGColor={colors.green_3C}>
      <FlatList
        data={['LOGIN_SCREEN']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
      <View style={styles.alignSelf}>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.grey_085),
          ]}>
          {strings.noAcc}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.orange),
            ]}>
            {strings.createAcc}
          </Text>
        </Text>
      </View>
      <Spacer height={hp('5%')} />
    </CustomSafeArea>
  );
};

LoginScreen.propTypes = {
  route: PropTypes.shape({}),
};

export default LoginScreen;
