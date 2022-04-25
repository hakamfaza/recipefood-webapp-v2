import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';
import styles from '../../assets/styles/components/navbar/navbar.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [navbar, setNavbar] = useState(false);
  const [getToken, setToken] = useState(true);

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    const getToken = localStorage.getItem('token');
    setToken(getToken);

    setUser(JSON.parse(getUser));

    setUser(JSON.parse(getUser));
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <Navbar
        className={
          navbar ? styles.navActive : isOpen ? styles.navActive : styles.nav
        }
        // color={window.screenTop < 0 ? 'danger' : 'white'}
        expand="md"
        light
      >
        {/* <NavbarBrand
          href="/"
          style={navbar ? { display: 'contents' } : { display: 'none' }}
        >
          Mama Recipe
        </NavbarBrand> */}
        <NavbarToggler className="me-2" onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto"
            navbar
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <NavItem>
              <NavLink href="/" className={styles.navText}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addrecipe" className={styles.navText}>
                Add Recipe
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile" className={styles.navText}>
                Profile
              </NavLink>
            </NavItem>

            <NavItem
              style={isOpen ? {} : { position: 'absolute', right: '100px' }}
              className={getToken ? styles.display : ''}
            >
              <NavLink
                href="/login"
                className={
                  navbar
                    ? styles.iconText
                    : isOpen
                    ? styles.iconTextActive
                    : styles.iconText
                }
              >
                <BiUserCircle className={styles.navIcon}>?</BiUserCircle>
                Login
              </NavLink>
            </NavItem>

            <NavItem
              style={isOpen ? {} : { position: 'absolute', right: '100px' }}
              className={getToken ? '' : styles.display}
            >
              <NavLink className={styles.iconText} onClick={() => logOut()}>
                <AiOutlineLogout
                  className={
                    navbar
                      ? styles.navIconLogActive
                      : isOpen
                      ? styles.navIconLogActive
                      : styles.navIconLogout
                  }
                >
                  ?
                </AiOutlineLogout>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
