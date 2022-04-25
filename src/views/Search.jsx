import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';

import Navbar from '../components/Navbar/Navbar';
import CardResult from '../components/CardResult/CardResult';
import styles from '../assets/styles/views/search.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipe } from '../redux/actions/recipe';

const Search = () => {
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();
  const getQuery = queryParams.get('q');
  console.log(getQuery);

  // const [getRecipe, setGetRecipe] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');

  const getToken = localStorage.getItem('token');
  const getUser = localStorage.getItem('user');

  useEffect(() => {
    setSearchRecipe(getQuery);
  }, []);

  console.log(searchRecipe);

  if (!getToken || !getUser) {
    navigate('/login');
  }

  const dispatch = useDispatch();
  const recipe = useSelector((state) => {
    return state.recipe;
  });

  console.log(recipe);
  console.log(searchRecipe);

  useEffect(() => {
    dispatch(getRecipe(searchRecipe));
  }, []);

  const getInput = (e, field) => {
    setSearchRecipe(e.target.value);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    // e.currentTarget.reset();
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
    const query = {
      search: searchRecipe
    };

    navigate({
      pathname: '/search',
      search: `?q=${query.search}`
    });
  };

  return (
    <>
      <Navbar />
      <div className={('container-fluid', styles.container)}>
        <div className={styles.boxOfSearch}>
          <Form onSubmit={(e) => onSubmit(e)}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="search..."
                defaultValue={getQuery ? getQuery : ''}
                onChange={(e) => getInput(e)}
              />
              <div>
                <BiSearch className={styles.icon} />
              </div>
            </div>
          </Form>
        </div>

        <div className={styles.boxList}>
          <div className="row">
            {recipe.data.map((e, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <CardResult
                    src={`${process.env.REACT_APP_API_URL}/image/${e.image}`}
                    title={e.title}
                    date={e.date}
                    href={`/item/${e.id}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
