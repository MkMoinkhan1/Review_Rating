import React from "react";
import "./usersignup.css";
import leftImg from "../../assets/loginpreview.png";
import circleStar from "../../assets/circleStar.jpeg";
import sideCicle from "../../assets/sideCicle.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import { Link } from "react-router-dom";

const UserSignUp = () => {
  const defaultValues = {
    email: "",
    password: "",
    number: "",
    city: "",
    state:"",
    file:"",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required().email("Please enter a valid email"),
    password: yup
      .string()
      .required()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    number: yup.number()
    .min(13, "Must be more than 10 characters")
    .required(),
    city:yup.string().required(),
    state:yup.string().required(),
    file:yup
    .mixed()
    .required("A file is required")
  });

  const handleSubmit = (values) => {
    console.log("Value ,", values);
  };
  return (
    <>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="signup-main">
          <div className="signup-left">
            <h1>Welcome</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={leftImg} alt="" />
          </div>
          <div className="signup-right">
            <div className="signup-imgg">
              <div className="signup-dStar">
                <img className="signup-sideCicle" src={sideCicle} alt="" />
              </div>
              <div className="signup-star">
                <img src={circleStar} alt="" />
              </div>
            </div>
            <div className="signup-heading">
              <h1>Sign Up</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className="signup-formarea">
              <Form className="form">
                <div className="p-input">
                  <Field
                    type="email "
                    name="email"
                    placeholder="&#xf0e0;   Email"
                    style={{ fontFamily: "Arial, FontAwesome" }}
                    className="input"
                  />
                  <p
                    style={{
                      fontSize: "0.6rem",
                      margin: "0 10px",
                      color: "red",
                    }}
                  >
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div className="p-input">
                  <Field
                    type="password"
                    name="password"
                    placeholder="&#xf023;  Password"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                    className="input"
                  />
                  
                  <p
                    style={{
                      fontSize: "0.6rem",
                      margin: "0 10px",
                      color: "red",
                    }}
                  >
                    <ErrorMessage name="password" />
                  </p>
                </div>

                <div className="p-input">
                  <Field
                    type="number"
                    name="number"
                    placeholder="&#xf095;  Phone Number"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                    className="input"
                  />

                  <p
                    style={{
                      fontSize: "0.6rem",
                      margin: "0 10px",
                      color: "red",
                    }}
                  >
                    <ErrorMessage name="number" />
                  </p>
                </div>

                <div className="p-input">
                  <Field
                    className="select"
                    as="select"
                    type="field"
                    name="city"
                    style={{ color: "gray" }}
                  >
                    <option>🏛️ Please Choose a City</option>
                    <option>Indore</option>
                    <option>Ratlam</option>
                    <option>Ujjain</option>
                    <option>Dewas</option>
                    <option>Khargon</option>
                  </Field>
                  <p
                    style={{
                      fontSize: "0.6rem",
                      margin: "0 10px",
                      color: "red",
                    }}
                  >
                    <ErrorMessage name="city" />
                  </p>
                </div>

                <div className="p-input">
                  <Field
                    className="select"
                    name="state"
                    as="select"
                    type="select"
                    style={{ color: "gray" }}
                  >
                    <option>🏙 Please Choose a State</option>
                    <option>Madhya Pradesh</option>
                    <option>Uttar Pradesh</option>
                    <option>Andra Pradesh</option>
                    <option>Himachal Pradesh</option>
                    <option>Rajsthan</option>
                  </Field>

                  <p
                    style={{
                      fontSize: "0.6rem",
                      margin: "0 10px",
                      color: "red",
                    }}
                  >
                    <ErrorMessage name="state" />
                  </p>
                </div>
                <div className="p-input">
                  <Field  type="file" name="file" style={{fontSize:'0.7rem',margin:'0 6px'}}/>

                  <p
                    style={{
                      fontSize: "0.6rem",
                      margin: "0 10px",
                      color: "red",
                    }}
                  >
                    <ErrorMessage name="file" />
                  </p>
                </div>
                <button className="signup-btn">Sign Up</button>
              </Form>
            </div>
            <div className="signup-last">
              <hr />
              <p>
                I already have an Account?
                <Link to={"/login"} style={{ fontSize: "0.7rem" }}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default UserSignUp;
