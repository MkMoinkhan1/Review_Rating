import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";

const TestApi = () => {
  const [value, setValue] = useState([]);
  const fatchData = async () => {
    const { data } = await axios.get(
      "https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev"
    );
    // let item  =  data.body.ḍata 
    setValue(data.body.data);
  };
  useEffect(() => {
    fatchData();
  },[]);
  return (
    <>
      <div
        className="container-xl"
        style={{
          padding: "5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {value.map((val) => (
          <>
            <div
              className="card-main"
              style={{ width: "20rem", margin: "3px",border:'1px solid',borderRadius:'5px',padding:'15px' }}
            >
              <img
                className="card-img-top"
                src={val.SnapshotSignedUrl}
                alt=""
              />
              <p>Last Update {val.LastActivityTime}</p>

              <div className="card-body">
                <h5 className="card-title">DeviceID:{val.DeviceID}</h5>
                <p className="card-text">
                  <span style={{ color: "black", fontSize: "1rem" }}>
                    This is a UserId
                  </span>
                  {val.UserID}
                  <br></br>
                  <span style={{ color: "black", fontStyle: "bold" }}>
                    This is a description{" "}
                  </span>{" "}
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <ol>
                  {val.Tags.map((val,i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ol>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* <Link to={'signup'}>signup</Link>
      <Link to={'review'}>review</Link>
      <Outlet/> */}
    </>
  );
};

export default TestApi;
