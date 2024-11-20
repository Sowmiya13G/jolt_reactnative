import { ERROR_HANDLER_TEXT } from '../constant/strings';
import { emailValidation, mobileNumberValidation } from './codeSnippets';

export const validateRegisterForm = data => {
  const errors = {};

  Object.keys(data).forEach(field => {
    const value = data[field];

    switch (field) {
      case 'firstName':
        if (!value) {
          errors.firstName = ERROR_HANDLER_TEXT.firstNameReq;
        }
        break;
      case 'middleName':
        if (!value) {
          errors.middleName = ERROR_HANDLER_TEXT.middleNameRed;
        }
        break;
      case 'gender':
        if (!value) {
          errors.gender = ERROR_HANDLER_TEXT.genderReq;
        }
        break;
      case 'dob':
        if (!value) {
          errors.dob = ERROR_HANDLER_TEXT.dobReq;
        }
        break;
      case 'email':
        const {isValid: isEmailValid, errors: emailErrors} =
          emailValidation(value);
        if (!isEmailValid) {
          errors.email = emailErrors.email;
        }
        break;
      case 'phoneNo':
        const {isValid: isPhoneValid, errors: phoneErrors} =
          mobileNumberValidation(value);
        if (!isPhoneValid) {
          errors.phoneNo = phoneErrors.mobile;
        }
        break;
      default:
        break;
    }
  });

  return errors;
};
