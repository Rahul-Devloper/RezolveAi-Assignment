import React from "react";
import { useState, useEffect } from "react";
import Grids from "./Grids";
import Navbar from "./Navbar";
import UserChart from "./UserChart";

const App = () => {
  let [data, setData] = useState([]);
  let [subscribed, setSubscribed] = useState([]);
  useEffect(() => {
    fetchData();
    fetchSubs();
  }, []);
  const fetchData = () => {
    fetch(`https://618ecadc50e24d0017ce1463.mockapi.io/user`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  console.log(data);

  const fetchSubs = () => {
    fetch(`https://618ecadc50e24d0017ce1463.mockapi.io/user-subscribed`)
      .then((response) => response.json())
      .then((json) => setSubscribed(json));
  };

  return (
    <div>
      <Navbar />
      <Grids data={data} />
      <UserChart data={data} subscribed={subscribed} />
    </div>
  );
};

export default App;
