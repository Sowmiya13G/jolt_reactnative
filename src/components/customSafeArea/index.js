import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';

// packages
import PropTypes from 'prop-types';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
//constants
import { iconpathurl } from '../../constant/iconpath';
import { colors } from '../../constant/theme';

function CustomSafeArea(props) {
  //props
  const {
    style = {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImg = iconpathurl.commonImgBackground,
    backgroundColor = colors.themeColor,
    isCustomFooter,
    footerComp = () => <></>,
  } = props;
  
  //render status bar
  const CustomStatusBar = ({
    backgroundColor,
    barStyle = 'dark-content',
  }) => {
    const insets = useSafeAreaInsets();

    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={backgroundColor} />
      <ImageBackground
        source={backgroundImg}
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
        }}>
        <View style={{...style}}>{props.children}</View>
      </ImageBackground>
      {isCustomFooter && Boolean(footerComp) && footerComp()}
    </SafeAreaProvider>
  );
}
CustomSafeArea.propTypes = {
  style: PropTypes.object,
  backgroundImg: PropTypes.any,
  backgroundColor: PropTypes.string,
  isCustomFooter: PropTypes.bool,
  footerComp: PropTypes.func,
  children: PropTypes.node,
  barStyle: PropTypes.string,
};

export default CustomSafeArea;
