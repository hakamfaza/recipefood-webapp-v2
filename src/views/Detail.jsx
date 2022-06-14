/* eslint-disable multiline-ternary */
/* eslint-disable semi */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from '../assets/styles/views/detail.module.css';
import Navbar from '../components/Navbar/Navbar';
import { BiLike, BiBookmark } from 'react-icons/bi';
import { FiPlay } from 'react-icons/fi';
import user from '../assets/img/user.webp';

import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions/recipe';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

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
        <div className={styles.detailContainer}>
          <div className={styles.boxOfDetail}>
            <div className="container-fluid">
              <div className="row">
                <div className={styles.detailImage}>
                  <div className="col-sm">
                    {recipe.data ? (
                      <h1 className={styles.titleDetailRecipe}>
                        {recipe.data.title}
                      </h1>
                    ) : null}

                    {recipe.data ? (
                      <div className={styles.boxImageDetail}>
                        <img
                          src={`${process.env.REACT_APP_API_URL}/${recipe.data.image}`}
                          alt={recipe.data.title}
                          className={styles.imageRecipe}
                        />
                        <div className={styles.boxIcon}>
                          <BiBookmark className={styles.bookmarkIcon} />
                          <BiLike className={styles.likeIcon} />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className={styles.containerRecipe}>
                <div className="row col-sm">
                  <h2 className={styles.titleRecipe}>Ingredients</h2>
                  {recipe.data ? (
                    <p className={styles.ingredients}>
                      {recipe.data.ingredients}
                    </p>
                  ) : null}
                  <h2 className={styles.titleRecipe}>Detail Vidio</h2>
                  <Link to="/vidio">
                    <button className={styles.playButton}>
                      <FiPlay />
                    </button>
                  </Link>
                </div>
              </div>

              <div className={styles.containerComment}>
                <div className="row col-sm">
                  <div className={styles.boxComment}>
                    <textarea
                      name="comment"
                      id="comment"
                      cols="30"
                      rows="10"
                      className={styles.textAreaComment}
                      placeholder="Comment:"
                    ></textarea>
                    <button className={styles.buttonPost}>Post</button>
                  </div>
                  <div className={styles.boxUserComment}>
                    <h2 className={styles.titleRecipe}>Comment</h2>
                    <div className={styles.boxCommentUser}>
                      <img
                        src={user}
                        alt="User"
                        className={styles.userComment}
                      />
                      <div className={styles.userAndComment}>
                        <h6 className={styles.titleUser}>Ayudia</h6>
                        <p className={styles.textComment}>
                          Nice recipe. simple and delicious, thankyou
                        </p>
                      </div>
                    </div>
                  </div>
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

export default Detail;
