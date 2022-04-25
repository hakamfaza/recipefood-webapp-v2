import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CardVidio from '../components/CardVidio/CardVidio';
import styles from '../assets/styles/views/vidio.module.css';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Vidio = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 bgVidio" style={style.bgVidio}>
            <div></div>
          </div>
          <div className="col-md-8">
            <div className={styles.containerMainVidio}>
              <div>
                <iframe
                  width="720"
                  height="420"
                  src="https://www.youtube.com/embed/ggeb4lXdPYo"
                  title="YouTube video player"
                  allowtransparency="true"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameborder="0"
                  allowfullscreen
                  className={styles.vidio}
                />
                <div className={styles.titleVidio}>
                  <h4>
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                  </h4>
                </div>

                <p>HanaLohana - 3 month ago</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className={styles.containerListVidio}>
              <div className={styles.boxListVidio}>
                <div className={styles.boxOFNext}>
                  <div className={styles.textBox}>
                    <h5>Next</h5>
                  </div>
                  <div className={styles.boxOfCard}>
                    <CardVidio />
                    <CardVidio />
                    <CardVidio />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidio;
