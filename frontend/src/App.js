import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,Signupage,Home,CreateProduct,MyProducts} from "./routes/routes.js";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/login' element={<LoginPage/>} />
        <Route path ='/signup' element={<Signupage/>} />
        <Route path ='/' element={<Home/>} />
        <Route path ='/create' element={<CreateProduct/>} />
        <Route path ='/myProducts' element={<MyProducts/>} />
        <Route path ='/create-product/:id' element={<CreateProduct/>} />

        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
