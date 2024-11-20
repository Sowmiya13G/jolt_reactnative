import { ERROR_HANDLER_TEXT } from "../constant/strings";

//email format checker
export function emailValidation(data, formatOnly = false, errorText = '') {
  let errors = {};
  let isValid = true;

  if (!data) {
    if (!formatOnly) {
      isValid = false;
      if (errorText) {
        errors['email'] = errorText;
      } else {
        errors['email'] = ERROR_HANDLER_TEXT.pleaseEnterEmail;
      }
    }
  } else if (typeof data !== 'undefined') {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!pattern.test(data)) {
      isValid = false;
      errors['email'] = ERROR_HANDLER_TEXT.pleaseEnterValidEmail;
    }
  }
  return {isValid: isValid, errors: errors};
}

//mobile format checker
export function mobileNumberValidation(mobile) {
  let errors = {};
  let isValid = true;

  if (!mobile) {
    isValid = false;
    errors['mobile'] = ERROR_HANDLER_TEXT.pleaseEnterMobileNo;
  } else if (typeof mobile !== 'undefined') {
    var pattern = new RegExp(/^[6-9]{1}[0-9]{9}$/);
    if (!pattern.test(mobile)) {
      isValid = false;
      errors['mobile'] = ERROR_HANDLER_TEXT.pleaseEnterValidMobileNo;
    }
  }
  return {isValid: isValid, errors: errors};
}
