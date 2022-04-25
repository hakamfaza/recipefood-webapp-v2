import React from 'react';
import styles from '../../assets/styles/styles';
import style from '../../assets/styles/components/footer/footer.module.css';

const Footer = () => {
  return (
    <div className="container-fluid" style={styles.footerContainer}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" style={styles.titleBox}>
          <h1 className={style.txtTitle}>Eat, Cook, Repeat</h1>
          <p className={style.txtColor}>
            Share your best recipe by uploading here !
          </p>
          <ul className={style.footerList}>
            <li>
              <a href="/" className={style.footerLink}>
                Product
              </a>
            </li>
            <li>
              <a href="/" className={style.footerLink}>
                Company
              </a>
            </li>
            <li>
              <a href="/" className={style.footerLink}>
                Learn More
              </a>
            </li>
            <li>
              <a href="/" className={style.footerLink}>
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4" style={styles.boxTextCreadit}>
          <div className="boxCreadit">
            <p className={style.txtCreadit}>©PijarCamp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
