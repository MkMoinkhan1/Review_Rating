import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLogin from "./app/Component/auth/UserLogin";
import Home from "./app/Component/Home";
import UserSignUp from "./app/Component/auth/UserSignUp";
import ReviewPage from "./app/Component/ReviewPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestApi from "./app/Component/TestApi";
import Error from "./app/Component/Error";
import Layout from "./app/Component/Layout";

// import Pactice from './app/Component/Pactice'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   },
//   {
//     path:'/login',
//     element:<UserLogin/>
//   },
//   {
//     path:'/signup',
//     element:<UserSignUp/>
//   },
//   {
//     path:'/reviewpage',
//     element:<ReviewPage/>
//   },{
//     path:'/parctice',
//     element:<Pactice/>
//   }
// ])

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/reviewpage" element={<ReviewPage />} />
            <Route path="/testapi" element={<TestApi />} />
          </Route>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <Route path='/*' element={<Navigate to={'/'}/>}/> */}
    </>
  );
};

export default App;
