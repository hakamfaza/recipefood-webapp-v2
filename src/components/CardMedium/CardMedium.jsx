import React from 'react';
import styles from '../../assets/styles/components/card/card.module.css';
// import '../../assets/styles/components/card/card.module.css';

const CardMedium = (params) => {
  return (
    <>
      <a href={params.href}>
        <div className={styles.cardMedium}>
          <img
            src={params.src}
            alt={params.alt}
            className={styles.cardImageMedium}
          />
          <h2 className={styles.cardTitleMedium}>{params.title}</h2>
        </div>
      </a>
    </>
  );
};

export default CardMedium;
