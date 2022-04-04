import React from "react";
import MyBarChart from "../MyBarChart/MyBarChart";

import MyLineChart from "../MyLineChart/MyLineChart";

const Dashboard = () => {
  return (
    <div className="d-md-flex  justify-content-around  mt-5">
      <div>
        <h3 className="text-primary"> Month Wise Sell</h3>
        <MyLineChart></MyLineChart>
      </div>
      <div>
        <h3 className="text-primary"> Investment VS Revenue</h3>
        <MyBarChart></MyBarChart>
      </div>
    </div>
  );
};

export default Dashboard;
