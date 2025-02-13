import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,Signupage,Home} from "./routes/routes.js";
import CreateProduct from './pages/CreateProduct.jsx';
import MyProducts from './pages/myProduct.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/login' element={<LoginPage/>} />
        <Route path ='/signup' element={<Signupage/>} />
        <Route path ='/' element={<Home/>} />
        <Route path ='/createProduct' element={<CreateProduct/>} />
        <Route path ='/myProduct' element={<MyProducts/>} />
        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
