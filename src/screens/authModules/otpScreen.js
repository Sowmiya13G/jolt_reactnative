import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

// packages
import OTPInputView from '@twotalltotems/react-native-otp-input';
import PropTypes from 'prop-types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// styles
import styles from '../styles/otpScreen';

// navigation
import NavigationService from '../../navigation/NavigationService';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import PopUp from '../../components/popUp';
import Spacer from '../../components/spacer';

// constants
import { SCREENS } from '../../constant';
import { iconPathURL } from '../../constant/iconpath';
import { strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

const OTPScreen = props => {
  //route params
  const {type} = props.route.params;

  //dispatcher

  //local ref
  const otpRef = useRef(null);

  //local state
  const [otp, setOTP] = useState('');
  const [seconds, setSeconds] = useState(300);
  const [err, setErr] = useState(false);

  const [isPopup, setIsPopup] = useState(false);

  // screen types
  const isForgotPassword = type == strings.forgotPasswordTitle;
  const isNewPassword = type == strings.createNewPassword;

  // ---------------- useeffects ------------------
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (otpRef.current) {
        otpRef.current.focusField(0);
      }
    }, 250);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isPopup) {
      setTimeout(() => {
        NavigationService.navigate(SCREENS.FORGOT_PASSWORD, {
          type: strings.createNewPassword,
        });
        setIsPopup(false);
      }, 300);
    }
  }, [isPopup]);

  // -------------- api calls -----------------------

  const verifyOTP = () => {
    isForgotPassword && setIsPopup(true);
  };

  // --------------- validation ----------------------

  const validate = () => {
    switch (true) {
      case !otp:
        Modal.alert(ERROR_HANDLER_TEXT.pleaseEnterOTP);
        return false;

      default:
        return true;
    }
  };

  // ----------------- functions ---------------------

  //------------------ set data functions ------------------

  //--------------- render ui components -------------------

  // render body container
  const renderBody = () => {
    return (
      <>
        <Spacer height={hp('10%')} />
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.black_00),
              styles.texAlign,
            ]}>
            {strings.forgotPasswordTitle}
          </Text>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size2,
                colors.grey_32,
              ),
              styles.texAlign,
              styles.titleMargin,
            ]}>
            {strings.forgotPasswordDisc}
          </Text>
          <Spacer height={hp('2%')} />
        </View>
        <View>
          <OTPInputView
            style={styles.otp}
            pinCount={4}
            secureTextEntry
            codeInputFieldStyle={[
              styles.underlineStyleBase,
              {
                borderColor: colors.grey_80,
              },
            ]}
            onCodeFilled={code => {
              setOTP(code);
            }}
            ref={otpRef}
            autoFocusOnLoad={false}
          />

          <Spacer height={hp('5%')} />
          <Button
            onPress={() => verifyOTP()}
            text={strings.verify}
            buttonStyle={styles.loginButton}
            textStyle={baseStyle.txtStyleOutInterSemiBold(
              sizes.size2,
              colors.white_FF,
            )}
          />
          <Spacer height={hp('3%')} />
          <View style={styles.alreadyTextView}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size2,
                  colors.grey_80,
                ),
              ]}>
              {strings.didNtGetCode}{' '}
            </Text>
            <Text
              onPress={() => {
                NavigationService.navigate(SCREENS.BOTTOM_TAB_NAV);
              }}
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.orange),
              ]}>
              {strings.resend}
            </Text>
          </View>
          {err && (
            <>
              <Spacer height={hp('10%')} />
              <View style={styles.errView}>
                <Text
                  onPress={() => {}}
                  style={[
                    baseStyle.txtStyleOutInterRegular(
                      sizes.size2,
                      colors.white_FF,
                    ),
                  ]}>
                  {strings.incorrectCode}
                </Text>
                <Image source={iconPathURL.cancel} style={styles.cancelIcon} />
              </View>
            </>
          )}
        </View>
      </>
    );
  };

  return (
    <CustomSafeArea style={styles.container}>
      {isPopup ? (
        <PopUp
          icon={iconPathURL.success}
          title={strings.verified}
          disc={strings.verifiedDisc}
        />
      ) : (
        <>
          <Header
            goBack={() => {
              NavigationService.goBack();
            }}
            title={strings.forgotPasswordTitle}
            color={colors.grey_32}
            leftIcon1={iconPathURL.backArrow}
          />
          <FlatList
            data={['OTP_SCREEN']}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderBody}
          />
        </>
      )}
    </CustomSafeArea>
  );
};

OTPScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }),
};

export default OTPScreen;

{
  /*
<Text
style={[
  baseStyle.txtStyleOutInterRegular(sizes.size2, colors.red),
  styles.textAlignCenter,
]}>
<Text
  onPress={() => {
    seconds == 0 && resendOTP();
  }}
  style={[
    baseStyle.txtStyleOutInterRegular(sizes.size2, colors.blue_F4),
    styles.underlinerText,
  ]}></Text>
 {seconds !== 0 &&
  ` in ${moment.utc(seconds * 1000).format('mm:ss')}`} 
</Text>
*/
}

// timer effect
// useEffect(() => {
//   if (Platform.OS == "ios") {
//     BackgroundTimer.start();

//     const intervalId = BackgroundTimer.setTimeout(() => {
//       if (seconds == 0) {
//       } else {
//         setSeconds((seconds) => seconds - 1);
//       }
//     }, 1000);
//     return function cleanUp() {
//       BackgroundTimer.clearTimeout(intervalId);
//     };
//   } else {
//     const intervalId = BackgroundTimer.setTimeout(() => {
//       if (seconds == 0) {
//       } else {
//         setSeconds((seconds) => seconds - 1);
//       }
//     }, 1000);
//     return function cleanUp() {
//       BackgroundTimer.clearTimeout(intervalId);
//     };
//   }
// });
