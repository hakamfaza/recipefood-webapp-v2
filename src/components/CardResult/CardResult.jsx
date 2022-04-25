import React from 'react';
import styles from '../../assets/styles/components/card.module.css';
// import { Link } from 'react-router-dom';

const CardResult = (params) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.boxImage}>
          <img src={params.src} alt={params.alt} className={styles.image} />
        </div>

        <div className={styles.boxAction}>
          <div className={styles.textBox}>
            <h5 className={('font', styles.recipeTitle)}>{params.title}</h5>
            <p className={('font', styles.date)}>{params.date}</p>
          </div>
          <a href={params.href}>
            <button className={styles.button}>Detail</button>
          </a>
        </div>

        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-info">Hallo</div>
            <div className="col-md-12 bg-info">Hallo</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CardResult;
