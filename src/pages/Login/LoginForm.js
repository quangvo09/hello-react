import React, { useRef, useState, useEffect } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Vui lòng nhập email")
    .required("Vui lòng nhập thông tin"),
  password: yup
    .string()
    .max(20)
    .required("Vui lòng nhập mật khẩu")
});

const LoginForm = ({
  isSubmitting,
  errors,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="false">
      <div>
        <label>Username</label>
        <Field
          id="username"
          name="username"
          type="text"
        />
        <div>{errors.username}</div>
      </div>
      <div>
        <label>Password</label>
        <Field
          id="password"
          name="password"
          type="password"
        />
        <div>{errors.password}</div>
      </div>
      <div data-testid="login-form-action">
        {isSubmitting ? (
          <div data-testid="loading">Loading</div>
        ) : (
          <button data-testid="login-button" onClick={handleSubmit} type={'submit'}>Login</button>
        )}
      </div>
    </form>
  );
};

const LoginFormContainer = ({ isSubmitting, onSubmit }) => {
  const formRef = useRef();
  const [form] = useState({
    username: "",
    password: ""
  });

  const _onSubmit = values => onSubmit(values);

  useEffect(() => {
    formRef.current.setSubmitting(isSubmitting);
  }, [isSubmitting]);

  return (
    <Formik
      ref={formRef}
      initialValues={form}
      validationSchema={loginSchema}
      component={LoginForm}
      onSubmit={_onSubmit}
      isSubmitting={isSubmitting}
      autoComplete="off"
    />
  );
};

export default LoginFormContainer;
