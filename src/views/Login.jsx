/* eslint-disable semi */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, FormGroup, Label, Input } from 'reactstrap';

import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

import styles from '../assets/styles/views/auth.module.css';
import '../assets/styles/style.css';
import { login } from '../redux/actions/auth';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };

    login(body)
      .then((response) => {
        if (response.data.code === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data.message
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: response.data.messaage,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        });
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm col-md bg-info">
          <div className={styles.positionJumbotron}>
            <AuthJumbotron />
          </div>
        </div>
        <div className="col-sm">
          <div className={styles.auth}>
            <div className={styles.formInput}>
              <h3 className={styles.authTitle}>Welcome</h3>
              <p className={styles.authTxt}>Log in into your exiting account</p>
              <Form
                method="get"
                action="/profile"
                className={styles.formWidth}
                onSubmit={(e) => onSubmit(e)}
              >
                <InputAuth
                  title="E-mail"
                  for="email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => onChangeInput(e, 'email')}
                />
                <InputAuth
                  title="Password"
                  for="password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => onChangeInput(e, 'password')}
                />
                <FormGroup className={styles.checkboxAuth} check>
                  <Label className={styles.textChecbox} check>
                    <Input type="checkbox" className={styles.check} required />I
                    agree to terms & conditions
                  </Label>
                </FormGroup>
                <ButtonComponent
                  className={styles.buttonSubmit}
                  title="Submit"
                />
              </Form>
              <a className={styles.txtForgotPassword} href="/">
                Forgot Password ?
              </a>
              <p className={styles.txtAuth}>
                Don`t have an account{' '}
                <a className={styles.txtAuthAction} href="/signup">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
