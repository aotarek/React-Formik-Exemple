import React from 'react';

const InputFiled = props => {
  const {
    type,
    name,
    handleChange,
    handleBlur,
    error,
    customTouched,
    textLabel,
    value
  } = props;
  return (
    <>
      <div className="form-content">
        <label className="form-label" htmlFor={name}>
          {textLabel}
        </label>
        <input
          type={type}
          className="form-control"
          id={name}
          placeholder={textLabel}
          name={name}
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
        />
      </div>
      <div className="form-error">
        {error && customTouched && (
          <label className="form-error-label">{error}</label>
        )}
      </div>
    </>
  );
};

export default InputFiled;
