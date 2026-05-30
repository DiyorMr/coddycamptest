import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Xato: ${err}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading ...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1 className="title">Users</h1>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};
export default App;
