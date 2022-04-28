/* eslint-disable semi */
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Vidio from '../views/Vidio';
import AddRecipe from '../views/AddRecipe';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import Profile from '../views/Profile';
import Search from '../views/Search';
import EditRecipe from '../views/Editrecipe';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="addrecipe" element={<PrivateRoute />}>
          <Route index element={<AddRecipe />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/recipe" element={<PrivateRoute />}>
          <Route index element={<Search />} />
        </Route>
        <Route path="/edit/:id" element={<PrivateRoute />}>
          <Route index element={<EditRecipe />} />
        </Route>
        <Route path="vidio" element={<PrivateRoute />}>
          <Route index element={<Vidio />} />
        </Route>
        <Route path="/item/:id" element={<PrivateRoute />}>
          <Route index element={<Detail />} />
        </Route>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
        <Route path="/signup">
          <Route index element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
