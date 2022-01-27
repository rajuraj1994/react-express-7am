import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ForgetPassword from './pages/auth/ForgetPassword';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Cart from './pages/Cart';

import Homepage from './pages/Homepage'

const MyRoute = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/forget/password" element={<ForgetPassword/>} />
              <Route path="/cart" element={<Cart/>} />

          </Routes>

      </Router>
  );
};

export default MyRoute;
