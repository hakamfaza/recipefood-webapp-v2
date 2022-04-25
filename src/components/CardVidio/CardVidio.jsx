import React from 'react';
import styles from '../../assets/styles/styles';

const CardVidio = () => {
  return (
    <div style={styles.cardListVidio}>
      <div style={{ position: 'relative' }}>
        <iframe
          width="220"
          height="109"
          src="https://www.youtube.com/embed/ggeb4lXdPYo"
          title="YouTube video player"
          allowtransparency="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={styles.smallVidio}
        />
      </div>
      <h6 style={styles.titleCardVidio}>
        Beef Steak with Curry Sauce - [Step 5] Saute condiments together until
        turn brown
      </h6>
      <p style={styles.textDate}>HanaLohana - 3 month ago</p>
    </div>
  );
};

export default CardVidio;
