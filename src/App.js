import React from "react";
import { useState, useEffect } from "react";
import Grids from "./Components/Grids";
import Navbar from "./Components/Navbar";
import UserChart from "./Pages/UserChart";

const App = () => {
  //defining the state "data" for storing user api
  let [data, setData] = useState([]);

  //defining the state "subscribed" for storing user-subscribed api
  let [subscribed, setSubscribed] = useState([]);
  useEffect(() => {
    fetchData();
    fetchSubs();
  }, []);

  //fetching data from user api
  const fetchData = () => {
    fetch(`https://618ecadc50e24d0017ce1463.mockapi.io/user`)
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  //consoling the json data fetched from the api
  console.log(data);
  console.log(subscribed);

  //fetching data from user-subscribed api
  const fetchSubs = () => {
    fetch(`https://618ecadc50e24d0017ce1463.mockapi.io/user-subscribed`)
      .then((response) => response.json())
      .then((json) => setSubscribed(json));
  };

  return (
    <div>
      {/* aligning the components */}
      <Navbar />
      <Grids data={data} />
      <UserChart data={data} subscribed={subscribed} />
    </div>
  );
};

export default App;
