import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,Signupage,Home} from "./routes/routes.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/login' element={<LoginPage/>} />
        <Route path ='/signup' element={<Signupage/>} />
        <Route path ='/' element={<Home/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
