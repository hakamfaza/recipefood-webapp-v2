import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar/Navbar';
import styles from '../assets/styles/views/addrecipe.module.css';
import '../assets/styles/style.css';
import ButtonComponents from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';
import axios from 'axios';

const AddRecipe = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    formData.append('ingredients', data.ingredients);
    formData.append('vidio', data.vidio);
    formData.append('date', data.date);
    // console.log(data.file);
    // console.log(data);
    const getToken = localStorage.getItem('token');

    for (var key of formData) {
      console.log(key);
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/recipe`, formData, {
        headers: {
          token: getToken,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <section>
        <div className={styles.containerAddRecipe}>
          <div className="container">
            <div className="row">
              <div className={styles.boxAddRecipe}>
                <div className="col-sm APP">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className={styles.inputImage}></div> */}
                    <input
                      type="file"
                      className={styles.inputImage}
                      // input
                      {...register('image')}
                    />
                    <input
                      type="text"
                      placeholder="Title"
                      className={('outlineNone', styles.titleInput)}
                      {...register('title')}
                    />
                    <textarea
                      name="ingredients"
                      id="ingredients"
                      cols="100"
                      rows="10"
                      placeholder="Ingredients"
                      className={('outlineNone', styles.ingredientsInput)}
                      {...register('ingredients')}
                    ></textarea>
                    <input
                      type="text"
                      placeholder="Vidio"
                      className={('outlineNone', styles.titleInput)}
                      {...register('vidio')}
                    />
                    <input
                      type="text"
                      placeholder="date"
                      className={('outlineNone', styles.titleInput)}
                      {...register('date')}
                    />
                    <ButtonComponents
                      title="Post"
                      className={styles.buttonPost}
                    />
                  </form>
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
