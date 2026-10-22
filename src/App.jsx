import { useEffect, useState } from "react";
import Doctorcard from "./component/Doctorcard";
import Navbar from "./component/Navbar";
import AddDoctor from "./pages/AddDoctor";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import UpdateDoctor from "./component/UpdateDoctor";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import Login from "./pages/Login";
import ProtectedRoute from "./component/ProtectedRoute";

function App(){
  
  return(
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addDoctor" element={<ProtectedRoute><AddDoctor/></ProtectedRoute>}></Route>
          <Route path="/updateDoctor/:id" element={<UpdateDoctor/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;