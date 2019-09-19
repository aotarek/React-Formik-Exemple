import React from 'react';

import { withFormik } from 'formik';
import { getSignupValidationSchema } from '../../../utils/validation';
import InputFiled from '../InputField/InputField';

import '../form.scss';

const SignUpForm = props => {
  const { touched, errors, handleSubmit, values, isValid } = props;
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="form-group">
        <InputFiled
          name="userName"
          type="text"
          textLabel="username"
          error={errors.userName}
          customTouched={touched.userName}
          value={values.userName}
          {...props}
        />
      </div>
      <div className="form-group">
        <InputFiled
          name="email"
          type="email"
          textLabel="email address"
          error={errors.email}
          customTouched={touched.email}
          value={values.email}
          {...props}
        />
      </div>
      <div className="form-group">
        <InputFiled
          name="password"
          type="password"
          textLabel="password"
          error={errors.password}
          customTouched={touched.password}
          value={values.password}
          {...props}
        />
      </div>
      <div className="form-group">
        <InputFiled
          name="passwordConfirmation"
          type="password"
          textLabel="confirm password"
          error={errors.passwordConfirmation}
          customTouched={touched.passwordConfirmation}
          value={values.passwordConfirmation}
          {...props}
        />
      </div>
      <div className="form-check">
        <InputFiled
          name="termsAndConditions"
          type="checkbox"
          textLabel="by signing up you agree to term conditions"
          error={errors.termsAndConditions}
          customTouched={touched.termsAndConditions}
          value={values.termsAndConditions}
          {...props}
        />
      </div>
      <button type="submit" disabled={!isValid} className="btn btn-primary">
        register now
      </button>
    </form>
  );
};

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    userName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    termsAndConditions: false
  }),

  validationSchema: getSignupValidationSchema(),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
});

export default EnhancedForm(SignUpForm);
