import React from 'react'

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp

























































































// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as yup from 'yup';

// const SignUp = () => {
//   //intial schema of formik

//   const defaultValue = {
//     name:'',
//     email:'',
//     password:'',
//   }

//   // validation schema  for formik

//   const validationSchema = yup.object().shape({
//     name:yup.string().required("please enter name"),
//     email: yup.string().required().email("please enter your email"),
//     password: yup.string().required("please enter your password"),
//   })

//   // 3rd after handle submit validation


//   const handleSubmit = (value) => {
//     console.log("Value: ", value);
//   }
//   return (
//     <>
//      <Formik 
//      initialValues={defaultValue}
//      validationSchema={validationSchema}
//      onSubmit={handleSubmit}>
//         <Form>
//         <div className="col-md-5 mt-4">
//             <Field
//             type="text"
//             name="name"
//             placeholder= "Enter your name"
//             className= "form-control"
//             />
//             <p className="text-danger">
//                 <ErrorMessage name="name"/>
//             </p>
//         </div>
//         <div className="col-md-5 mt-4">
//             <Field
//             type="email"
//             name="email"
//             placeholder= "Enter your email address"
//             className= "form-control"
//             />
//             <p className="text-danger">
//                 <ErrorMessage name="email"/>
//             </p>
//         </div>
//         <div className="col-md-5 mt-4">
//             <Field
//             type="password"
//             name="password"
//             placeholder= "Enter your password"
//             className= "form-control"
//             />
//             <p className="text-danger">
//                 <ErrorMessage name="password"/>
//             </p>
//         </div>
//         <button type="submit" className="btn btn-warning">Submit</button>
//      </Form>
//      </Formik>
     
//     </>
//   );
// };

// export default SignUp;



// import React, { useState } from 'react'

// import React, { useState } from 'react'

// const SignUp = () => {
//   const data =   [{
//       id:101,
//       email : "abc1@gmail.com",
//       name: 'Aman'
    
//    },
//    {
//       id:102,
//       email : "abc2@gmail.com",
//       name: 'ayush'
  
//    },
//    {
//       id:103,
//       email : "abc3@gmail.com",
//       name: 'sulabh'
//    }
//   ]
//   const [user,setUser] =useState(data)
//   return (
//     <div>   
//     {
//       user.map(val=>(
//         <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
//         <ul key={val.id}>
//           <li>{val.id}</li>
//           <li>{val.name}</li>
//           <li>{val.email}</li>
//           <hr ></hr>
//         </ul>
//         </div>
//       ))
//     }
//     </div>
//   )
// }

// export default SignUp