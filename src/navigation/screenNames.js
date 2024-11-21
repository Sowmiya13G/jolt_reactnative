// auth modules
import ForgotPasswordScreen from '../screens/authModules/forgotPassword';
import LoginScreen from '../screens/authModules/loginScreen';
import OnboardingScreen from '../screens/authModules/onboarding';
import OTPScreen from '../screens/authModules/otpScreen';
import RegisterScreen from '../screens/authModules/registerScreen';
import SplashScreen from '../screens/authModules/splash';

// home stack
import HomeScreen from '../screens/commonModules/homeScreen';
import SearchBusScreen from '../screens/commonModules/searchBusScreen';
import SearchScreen from '../screens/commonModules/searchScreen';
import SelectBoardingPoints from '../screens/commonModules/selectBoardingPoints';

// account stack
import AccountScreen from '../screens/commonModules/account';

// my strip stack
import MyTripScreen from '../screens/commonModules/myTrip';

// wallet stack
import WalletScreen from '../screens/commonModules/wallet';

export default {
  // auth Modules
  SplashScreen,
  OnboardingScreen,
  LoginScreen,
  ForgotPasswordScreen,
  OTPScreen,
  RegisterScreen,

  // home stack
  HomeScreen,
  SearchScreen,
  SearchBusScreen,
  SelectBoardingPoints,

  // my trip stack
  MyTripScreen,

  // wallet stack
  WalletScreen,

  // account stack
  AccountScreen,
};
