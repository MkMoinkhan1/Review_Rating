import React from "react";
import "./userlogin.css";
import leftImg from "../../assets/loginpreview.png";
import circleStar from "../../assets/circleStar.jpeg";
import sideCicle from "../../assets/sideCicle.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required().email("Please enter a valid email"),
    password: yup
      .string().required()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    
  });

  const handleSubmit = (values) => {
    console.log('Value ,' , values);
  };
  return (
    <>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="login-main">
          <div className="login-left">
            <h1>Welcome</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={leftImg} alt="" />
          </div>
          <div className="login-right">
            <div className="login-imgg">
              <div className="login-dStar">
                <img className="login-sideCicle" src={sideCicle} alt="" />
              </div>
              <div className="login-star">
                <img src={circleStar} alt="" />
              </div>
            </div>
            <div className="login-heading">
              <h1>Login</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className="login-formarea">
              <Form className="form">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="&#xf0e0;   Email"
                    style={{ fontFamily: "Arial, FontAwesome" }}
                    className="input"
                    
                  />
                  <p style={{fontSize:'0.6rem',margin:'0 10px',color:'red'}}>
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="&#xf023;  Password"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                  className="input"
                />
                                {/* <input type="text" placeholder="&#xf3c5;" style="font-family:Arial, FontAwesome" /> */}
                <p style={{fontSize:'0.6rem',margin:'0 10px',color:'red'}}>
                    <ErrorMessage name="password" />
                  </p>
                </div>
                <Link to={"#"}>Forget Password?</Link>
                <button type={"submit"} className="login-btn">
                  Login
                </button>
              </Form>
            </div>
            <hr></hr>
            <div className="login-last">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <Link to={"/signup"}>signup</Link>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default UserLogin;
