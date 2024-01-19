import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Login = lazy(() => import('./Login'));
const YourProfil= lazy(() => import('./YourProfil'));
const DetailProduct= lazy(() => import('./DetailProduct'));
const JsonExt= lazy(() => import('./jsonExt'));



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/YourProfil" element={<YourProfil/>} />
        <Route path="/DetailProduct" element={<DetailProduct/>} />
        <Route path="/JsonExt" element={<JsonExt/>} />

      </Routes>
    </Suspense>
    </Router>
  );
}

export default App;
