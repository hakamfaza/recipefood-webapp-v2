import React from 'react';
import styles from '../../assets/styles/views/auth.module.css';
import logo from '../../assets/img/logo.svg';

const AuthJumbotron = () => {
  return (
    <div className="row">
      <div className={('col-sm', styles.containerAuthLogo)}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h5 className={styles.titleLogo}>Mama Recipe.</h5>
      </div>
    </div>
  );
};

export default AuthJumbotron;
