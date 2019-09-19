import * as Yup from 'yup';

export function getSignupValidationSchema() {
  return Yup.object().shape({
    userName: Yup.string()
      .trim()
      .required('Please enter your full name.')
      .min(5, 'Please enter you name more then five characters!')
      .max(50, 'Please enter you name less then two characters!!')
      .matches(/^[A-Za-z.\s_-]+$/, `You can't use numbers.`)
      .required('Required'),
    email: Yup.string()
      .email('Please valid enter email address.')
      .trim()
      .required('Please valid enter email address.'),
    password: Yup.string()
      .trim()
      .min(6, 'Your password must contain atleast 6 characters.')
      .required('Please enter password.'),
    passwordConfirmation: Yup.string()
      .required('Please enter confirm password.')
      .oneOf([Yup.ref('password')], 'Password does not match.'),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      'You must accept Terms and Conditions.'
    )
  });
}

export function getProfilValidationSchema() {
  return Yup.object().shape({
    firstName: Yup.string().required('Please enter your company name.'),
    lastName: Yup.string().required('Please enter your company name.'),
    companyName: Yup.string().required('Please enter your company name.'),
    phoneNumber: Yup.string()
      .trim()
      .required('Please enter your phone number.')
      .matches(
        /^(0|[1-9]\d*)$/,
        `You can't use alphabets or special characters.`
      )
      .matches(/^\b\d{10}$\b/, 'Please enter a valid 10 digit number.')
  });
}
