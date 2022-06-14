/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Form, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';

import Navbar from '../components/Navbar/Navbar';
import CardResult from '../components/CardResult/CardResult';
import styles from '../assets/styles/views/search.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipe } from '../redux/actions/recipe';

const Search = () => {
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();
  const getQuery = queryParams.get('search');
  const getPage = queryParams.get('page');

  const [getPageValue, setPageValue] = useState(getPage);

  const [searchRecipe, setSearchRecipe] = useState(getQuery);

  useEffect(() => {
    setSearchRecipe(getQuery);
  }, []);

  const dispatch = useDispatch();
  const recipe = useSelector((state) => {
    return state.recipe;
  });

  useEffect(() => {
    dispatch(getRecipe(searchRecipe, getPageValue, 8));
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
      pathname: '/recipe',
      search: `?search=${query.search}`
    });
  };

  const onPage = (Page) => {
    setPageValue(Page);
    navigate(`?search=${getQuery}&page=${Page}`);
    getRecipe(searchRecipe, getPageValue, 8);
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
                defaultValue={getQuery || ''}
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
                    src={`${process.env.REACT_APP_API_URL}/${e.image}`}
                    title={e.title}
                    date={e.date}
                    href={`/item/${e.id}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.boxOfPagiantion}>
          <Pagination size="md" aria-label="Page">
            <PaginationItem>
              <PaginationLink previous />
            </PaginationItem>
            <PaginationItem onClick={() => onPage(1)}>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem onClick={() => onPage(2)}>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem onClick={() => onPage(3)}>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Search;
