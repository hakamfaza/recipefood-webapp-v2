import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../assets/styles/views/addrecipe.module.css';
import '../assets/styles/style.css';
import ButtonComponents from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';

const AddRecipe = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className={styles.containerAddRecipe}>
          <div className="container">
            <div className="row">
              <div className={styles.boxAddRecipe}>
                <div className="col-sm">
                  <div className={styles.inputImage}></div>
                  <input
                    type="text"
                    placeholder="Title"
                    className={('outlineNone', styles.titleInput)}
                  />
                  <textarea
                    name="ingredients"
                    id="ingredients"
                    cols="100"
                    rows="10"
                    placeholder="Ingredients"
                    className={('outlineNone', styles.ingredientsInput)}
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Title"
                    className={('outlineNone', styles.titleInput)}
                  />
                  <ButtonComponents
                    title="Update"
                    className={styles.buttonPost}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddRecipe;
