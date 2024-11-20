import {iconPathURL} from './iconpath';
import {strings} from './strings';

export const onboardingData = [
  {
    title: strings.getTicket,
    disc: strings.buyTicket,
    image: iconPathURL.onboarding,
  },
  {
    title: strings.planRide,
    disc: strings.selectSeat,
    image: iconPathURL.bus,
  },
  {
    title: strings.showScreen,
    disc: strings.digitalTicket,
    image: iconPathURL.ticket,
  },
];

export const genderData = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];

export const registerScreenFields = [
  {
    placeHolder: strings.firstName,
    leftIcon: iconPathURL.person,
    key: 'firstName',
  },
  {
    placeHolder: strings.middleName,
    leftIcon: iconPathURL.person,
    key: 'middleName',
  },
  {
    placeHolder: strings.gender,
    rightIcon: iconPathURL.dropdown,
    key: 'gender',
  },
  {
    placeHolder: strings.dob,
    rightIcon: iconPathURL.calender,
    key: 'dob',
  },
  {
    placeHolder: strings.email,
    leftIcon: iconPathURL.email,
    key: 'email',
  },
  {
    placeHolder: strings.mobileNo,
    leftIcon: iconPathURL.call,
    key: 'phoneNo',
  },
];

export const filterData = [
  {id: 1, label: 'AC', value: 'AC'},
  {id: 2, label: 'Washroom', value: 'Washroom'},
  {id: 3, label: 'Sleeper', value: 'Sleeper'},
  {id: 4, label: 'Washroom', value: 'Washroom'},
  {id: 5, label: 'Semi-Sleeper', value: 'Semi-Sleeper'},
  {id: 6, label: 'Seater', value: 'Seater'},
  {id: 7, label: 'Complimentary', value: 'Complimentary'},
  {id: 8, label: 'Low price', value: 'Low price'},
];
