import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Vidio from '../views/Vidio';
import AddRecipe from '../views/AddRecipe';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import Profile from '../views/Profile';
import Search from '../views/Search';
import EditRecipe from '../views/Editrecipe';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="item/:id" element={<Detail />} />
          <Route path="vidio" element={<Vidio />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit" element={<EditRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
