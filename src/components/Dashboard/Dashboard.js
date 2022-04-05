import React from "react";
import MyBarChart from "../MyBarChart/MyBarChart";
import "./Dashboard.css";
import MyLineChart from "../MyLineChart/MyLineChart";

const Dashboard = () => {
  return (
    <div className="dashboard d-md-flex  justify-content-around  pt-5">
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
