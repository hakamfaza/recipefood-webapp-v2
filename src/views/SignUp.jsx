/* eslint-disable semi */
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

import styles from '../assets/styles/views/auth.module.css';
import '../assets/styles/style.css';

import { register } from '../redux/actions/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  // set default
  const [form, setForm] = useState({
    image: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    newPassword: ''
  });

  const [image, setImage] = useState('');

  // when input is typed
  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  };
  const onChangeImage = (e, field) => {
    setImage({ image: e.target.files[0] });
  };

  // when submitted
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.newPassword) {
      alert('password is not the same, please check again!');
    } else {
      const formData = new FormData();

      // for (const key in form) {
      //   bodyFormData.append(key, form[key]);
      // }

      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('password', form.password);
      formData.append('image', image.image);

      register(formData)
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
            navigate('/login');
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message
          });
        });
    }
  };

  return (
    <div className={(styles.containerSignUp, 'container-fluid')}>
      <div className="row">
        <div className="col-sm col-md">
          <div className={styles.positionJumbotron}>
            <AuthJumbotron />
          </div>
        </div>
        <div className="col-sm col-md">
          <div className={styles.authSignup}>
            <div className={styles.formInput}>
              <h3 className={styles.authTitle}>Let???s Get Started !</h3>
              <p className={styles.authTxt}>
                Create new account to access all features
              </p>
              <Form
                action="/profile"
                className={styles.formWidth}
                onSubmit={(e) => onSubmit(e)}
              >
                <input
                  type="file"
                  onChange={(e) => onChangeImage(e)}
                  className="form-control"
                />
                <InputAuth
                  title="Name"
                  for="name"
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Name"
                  onChange={(e) => onChangeInput(e, 'name')}
                />
                <InputAuth
                  title="Email Adress"
                  for="email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => onChangeInput(e, 'email')}
                />
                <InputAuth
                  title="Phone Number"
                  for="number"
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Enter phone number"
                  onChange={(e) => onChangeInput(e, 'phone')}
                />
                <InputAuth
                  title="Create New Password"
                  for="password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create New Password"
                  onChange={(e) => onChangeInput(e, 'password')}
                />
                <InputAuth
                  title="New Password"
                  for="newpassword"
                  id="newpassword"
                  name="newpassword"
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => onChangeInput(e, 'newPassword')}
                />

                <FormGroup className={styles.checkboxAuth} check>
                  <Label className={styles.textChecbox} check>
                    <Input
                      type="checkbox"
                      className={(styles.check, 'check')}
                      required
                    />{' '}
                    I agree to terms & conditions
                  </Label>
                </FormGroup>
                <ButtonComponent
                  className={styles.buttonSubmit}
                  title="Register Account"
                />
              </Form>
              <p className={styles.txtAuth}>
                Already have account?{' '}
                <a className={styles.txtAuthAction} href="/login">
                  Log in Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
