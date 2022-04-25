import React from 'react';
import styles from '../../assets/styles/components/card/card.module.css';

const Card = (params) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={params.src} alt={params.alt} className={styles.cardImage} />
        <h3 className={styles.cardTitle}>{params.title}</h3>
      </div>
    </>
  );
};

export default Card;
