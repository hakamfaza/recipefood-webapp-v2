/* eslint-disable react/jsx-no-undef */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Form
} from 'reactstrap';

import Navbar from '../components/Navbar/Navbar';
import CardSmall from '../components/CardSmall/CardSmall';
import Footer from '../components/Footer/Footer';

import styles from '../assets/styles/views/profile.module.css';
import { FiEdit } from 'react-icons/fi';

import Delete from '../components/Delete/Delete';
import Edit from '../components/Edit/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRecipe, deleteRecipe } from '../redux/actions/recipe';
import { getUser } from '../redux/actions/user';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const [toggleState, setToggleState] = useState(1);

  const [getIdRecipe, setIdRecipe] = useState([]);

  const getRecipe = useSelector((state) => {
    return state.myRecipe;
  });

  const getToken = localStorage.getItem('token');

  const geMytUser = useSelector((state) => {
    return state.getUser.data;
  });

  useEffect(() => {
    dispatch(getMyRecipe());
    dispatch(getUser());
    setUser(geMytUser);
  }, []);

  const onDeleteRecipe = () => {
    deleteRecipe(getIdRecipe, getToken)
      .then((res) => {
        console.log(res);
        navigate('/profile');
        getMyRecipe();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className={styles.containerProfile}>
            <div className="row">
              <div className="col-sm">
                <div className={styles.boxUserProfile}>
                  <div className={styles.userProfile}>
                    <img
                      src={
                        user.image
                          ? `${process.env.REACT_APP_API_URL}/${user.image}`
                          : `${process.env.REACT_APP_API_URL}/profile.jpg`
                      }
                      alt="User Profile"
                      className={styles.userImage}
                    />
                    <a href="profile" className={styles.iconLink}>
                      <FiEdit className={styles.editIcon} />
                    </a>
                  </div>
                  <h1 className={styles.titleUserProfile}>{user.name}</h1>
                </div>
              </div>
            </div>

            <div className={styles.boxRecipeAction}>
              <div className="row">
                <div className="col-sm">
                  <Nav className={styles.titleRecipeAction} tabs>
                    <NavItem className="font txt-profileaction">
                      <NavLink
                        className={toggleState === 1 ? styles.recipeAction : ''}
                        onClick={() => toggleTab(1)}
                      >
                        My Recipe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={toggleState === 2 ? styles.recipeAction : ''}
                        onClick={() => toggleTab(2)}
                      >
                        Saved Recipe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={toggleState === 3 ? styles.recipeAction : ''}
                        onClick={() => toggleTab(3)}
                      >
                        Liked Recipe
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <hr />

                  <TabContent
                    activeTab={
                      toggleState === 1 ? '1' : toggleState === 2 ? '2' : '3'
                    }
                  >
                    <TabPane tabId="1">
                      <div className="container">
                        <div className={styles.boxCardRecipe}>
                          <div className="row">
                            {getRecipe.data.map((item, index) => (
                              <div className="col-md-4" key={index}>
                                <div className={styles.boxCardRecipeProfile}>
                                  <Link to={`/item/${item.id}`}>
                                    <CardSmall
                                      src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                                      title={item.title}
                                      alt={item.title}
                                      edit="/edit"
                                    />
                                  </Link>
                                  <div className={styles.boxActionRecipe}>
                                    <Link to={`/edit/${item.id}`}>
                                      <Edit />
                                    </Link>
                                    <Form onClick={() => setIdRecipe(item.id)}>
                                      <Button
                                        className={styles.btn}
                                        onClick={() => onDeleteRecipe()}
                                      >
                                        <Delete />
                                      </Button>
                                    </Form>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="container">
                        <div className={styles.boxCardRecipe}>
                          <div className="row"></div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div className="container">
                        <div className={styles.boxCardRecipe}>
                          <div className="row"></div>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
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

export default Profile;
