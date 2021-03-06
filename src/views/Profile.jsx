/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap';

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
import Swal from 'sweetalert2';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const [toggleState, setToggleState] = useState(1);

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

  const onEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const onDeleteRecipe = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id, getToken)
          .then((res) => {
            res;
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            navigate('/profile');
            dispatch(getMyRecipe());
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message
            });
          });
      }
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
                    {user ? (
                      <img
                        src={
                          user.image
                            ? `${process.env.REACT_APP_API_URL}/${user.image}`
                            : `${process.env.REACT_APP_API_URL}/profile.jpg`
                        }
                        alt="User Profile"
                        className={styles.userImage}
                      />
                    ) : null}
                    <a href="profile" className={styles.iconLink}>
                      <FiEdit className={styles.editIcon} />
                    </a>
                  </div>
                  {user ? (
                    <h1 className={styles.titleUserProfile}>{user.name}</h1>
                  ) : null}
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
                          {getRecipe.data ? (
                            <div className="row">
                              {getRecipe.data.map((item, index) => (
                                <div className="col-md" key={index}>
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
                                      <Button
                                        className={styles.btn}
                                        onClick={() => onEdit(item.id)}
                                      >
                                        <Edit />
                                      </Button>
                                      <Button
                                        className={styles.btn}
                                        onClick={() => onDeleteRecipe(item.id)}
                                      >
                                        <Delete />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
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
