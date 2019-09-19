import React from 'react';
import { Formik, Form, Field } from 'formik';

import { getProfilValidationSchema } from '../../../utils/validation';
import '../form.scss';

const ProfilForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: ''
      }}
      validationSchema={getProfilValidationSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form className="Form">
          <div className="form-group">
            <div className="form-content">
              <label className="form-label" htmlFor="firstName">
                FirstName
              </label>
              <Field
                className="form-control"
                name="firstName"
                id="firstName"
                placeholder="firstName"
              />
              <div className="form-error">
                <label className="form-error-label">
                  {touched.firstName && errors.firstName}
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-content">
              <label className="form-label" htmlFor="lastName">
                lastName
              </label>
              <Field
                className="form-control"
                name="lastName"
                id="lastName"
                placeholder="lastName"
              />
              <div className="form-error">
                <label className="form-error-label">
                  {touched.lastName && errors.lastName}
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-content">
              <label className="form-label" htmlFor="companyName">
                companyName
              </label>
              <Field
                className="form-control"
                name="companyName"
                id="companyName"
                placeholder="companyName"
              />
              <div className="form-error">
                <label className="form-error-label">
                  {touched.companyName && errors.companyName}
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-content">
              <label className="form-label" htmlFor="phoneNumber">
                phoneNumber
              </label>
              <Field
                className="form-control"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="phoneNumber"
              />
              <div className="form-error">
                <label className="form-error-label">
                  {touched.phoneNumber && errors.phoneNumber}
                </label>
              </div>
            </div>
          </div>
          <button type="submit" disabled={!isValid} className="btn btn-primary">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfilForm;
