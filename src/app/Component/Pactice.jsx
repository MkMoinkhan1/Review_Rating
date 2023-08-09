import React, { useEffect, useState } from "react";

const Pactice = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts"
    )
      .then((data) => data.json())
      .then((data) => {
        setValue(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="container ">
        <table className="table table-hover thead-dark ">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
            </tr>
          </thead>
          {value &&value.map((val) => (
            <tbody className="table table-striped" >
            <tr  key={val.id}>
              <td >{val.id}</td>
              <td>{val.userId}</td>
              <td>{val.title}</td>
            </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Pactice;

