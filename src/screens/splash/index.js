import React, {useEffect, useState} from 'react';
import {Animated, Image, Text, View} from 'react-native';

// package
import {heightPercentageToDP} from 'react-native-responsive-screen';

// components
import Spacer from '../../components/spacer';

// styles
import styles from './styles';

// navigation
import NavigationService from '../../navigation/NavigationService';

// constants
import {SCREENS} from '../../constant';
import {iconPathURL} from '../../constant/iconpath';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

function SplashScreen() {
  const [progress] = useState(new Animated.Value(0));

  // ---------------- useeffect ------------------
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      NavigationService.navigate(SCREENS.ONBOARDING);
    }, 3000);
  }, [progress]);

  //--------------- render ui components -------------------

  return (
    <View style={styles.container}>
      <Image source={iconPathURL.logo} style={styles.splashImg} />
      <Text style={[baseStyle.txtStyleOutInterBold(sizes.size4, colors.white)]}>
        {strings.joltBus}
      </Text>
      <Spacer height={heightPercentageToDP('10%')} />
      <View style={styles.loaderContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

export default SplashScreen;
