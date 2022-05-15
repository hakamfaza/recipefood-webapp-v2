/* eslint-disable semi */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar/Navbar';
import styles from '../assets/styles/views/addrecipe.module.css';
import '../assets/styles/style.css';
import ButtonComponents from '../components/ButtonComponent/ButtonComponent';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { getDetail, upadateRecipe } from '../redux/actions/recipe';

const AddRecipe = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
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

    // for (const key of formData) {
    //   console.log(key);
    // }

    upadateRecipe(formData, getToken, id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const recipe = useSelector((state) => {
    return state.detail;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetail(id));
  }, []);

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
                    <input
                      type="file"
                      className={styles.inputImage}
                      {...register('image')}
                    />
                    <input
                      type="text"
                      placeholder="Title"
                      defaultValue={recipe.data.title}
                      className={('outlineNone', styles.titleInput)}
                      {...register('title')}
                    />
                    <textarea
                      name="ingredients"
                      id="ingredients"
                      cols="100"
                      rows="10"
                      placeholder="Ingredients"
                      defaultValue={recipe.data.ingredients}
                      className={('outlineNone', styles.ingredientsInput)}
                      {...register('ingredients')}
                    ></textarea>
                    <input
                      type="text"
                      placeholder="Vidio"
                      className={('outlineNone', styles.titleInput)}
                      defaultValue={recipe.data.vidio}
                      {...register('vidio')}
                    />
                    <input
                      type="text"
                      placeholder="date"
                      className={('outlineNone', styles.titleInput)}
                      defaultValue={recipe.data.date}
                      {...register('date')}
                    />
                    {/* <Link to="/profile"> */}
                    <ButtonComponents
                      title="Update"
                      className={styles.buttonPost}
                    />
                    {/* </Link> */}
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
