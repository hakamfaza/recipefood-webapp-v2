/* eslint-disable multiline-ternary */
/* eslint-disable indent */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NavbarComponent from '../components/Navbar/Navbar';
import { Input, Form } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';
import CardMedium from '../components/CardMedium/CardMedium';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

import styles from '../assets/styles/views/home.module.css';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

import bgVector from '../assets/img/bgvector.webp';
import vegetable from '../assets/img/vegetable.webp';
import foodOne from '../assets/img/foodone.webp';
import burger from '../assets/img/burger.webp';
import pizza from '../assets/img/pizza.webp';
import salmon from '../assets/img/salmon.webp';

import { getRecipe } from '../redux/actions/recipe';

const Home = () => {
  const navigate = useNavigate();

  const [searchRecipe, setSearchRecipe] = useState('');

  const getTitle = (e, field) => {
    setSearchRecipe({
      ...searchRecipe,
      [field]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const query = {
      search: searchRecipe.title
    };
    navigate({
      pathname: '/recipe',
      search: `?search=${query.search ? query.search : ''}`
    });
  };

  const dispatch = useDispatch();

  const recipe = useSelector((state) => {
    return state.recipe;
  });

  useEffect(() => {
    dispatch(getRecipe('', 1, 6));
    document.title = `${process.env.REACT_APP_NAME} | Web App`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <div className={styles.containerHome}>
          <div className="row">
            <div className="col-sm">
              <div className={styles.content}></div>
            </div>
            <div className="col-3" style={style.bgDecoration}></div>
          </div>
          <div className="container-lg">
            <div className={styles.boxAction}>
              <div className="row">
                <div className="col">
                  <div className={styles.content}>
                    <h1 className={styles.titleContent}>
                      Discover Recipe & Delicious Food
                    </h1>
                    <div className={styles.search}>
                      <BiSearch className={styles.iconSearch} />
                      <Form
                        onSubmit={(e) => onSubmit(e)}
                        className={styles.boxSearch}
                      >
                        <Input
                          placeholder="search recipe"
                          onChange={(e) => getTitle(e, 'title')}
                          className={('outlineNone', styles.searchInput)}
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className={styles.decoration}>
                    <img
                      src={bgVector}
                      alt="vector"
                      className={styles.bgVector}
                    />
                    <img
                      src={vegetable}
                      alt="vegetable"
                      className={styles.vegetable}
                    />
                    <img src={foodOne} alt="Food" className={styles.foodOne} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container-fluid" style={style.boxPopular}>
          <h1 className={styles.titlePopular}>Popular For You</h1>
          <div className="row" style={style.mtMedium}>
            {/* <div className={styles.imagePopularContainer}> */}
            <div className="col-md-6" style={style.imagePopularContainer}>
              {/* <div> */}
              <CardMedium
                src={pizza}
                title="Pizza Lamoa"
                alt="Pizza Lamoa"
                href="/"
              />
              {/* </div> */}
            </div>
            <div className="col-md-6" style={style.imagePopularContainer}>
              <CardMedium
                src={burger}
                title="King Burger"
                alt="King Burger"
                href="/"
              />
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="container-fluid" style={style.boxPopular}>
          <h1 className={styles.titlePopular}>New Recipe</h1>
          <div className="row" style={styles.mtMedium}>
            <div className="col-sm" style={style.containerNewRecipe}>
              <div className={styles.bgObject} />
              <div className={styles.boxCard}>
                <CardMedium src={salmon} />
              </div>
            </div>
            <div className="col-sm " style={style.boxAboutRecipe}>
              <div className={styles.boxAboutRecipe}>
                <h1 className={styles.aboutTitle}>Sugar Salmon</h1>
                <div className={styles.line} />
                <p className={styles.textAbout}>
                  Quick + Easy Sugar Salmon - Healthy sugar salmon in a hurry?
                  That’s right!
                </p>
                <Link to="/">
                  <button className="button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={style.boxLatest}>
          <h1 className={styles.titlePopular}>Latest Recipe</h1>
          <div className="container">
            <div className="row" style={style.boxOfCard}>
              {recipe.isLoading
                ? null
                : recipe.data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                      <Link to={`/item/${item.id}`}>
                        <Card
                          src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                          title={item.title}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
