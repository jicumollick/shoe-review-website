import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  {
    month: "Mar",
    investment: 10000,
    sell: 241,
    revenue: 1040,
  },
  {
    month: "Apr",
    investment: 20000,
    sell: 423,
    revenue: 2450,
  },
  {
    month: "May",
    investment: 50000,
    sell: 726,
    revenue: 6701,
  },
  {
    month: "Jun",
    investment: 70000,
    sell: 529,
    revenue: 4040,
  },
  {
    month: "Jul",
    investment: 60000,
    sell: 601,
    revenue: 5090,
  },
  {
    month: "Aug",
    investment: 90000,
    sell: 670,
    revenue: 6100,
  },
];
const MyLineChart = () => {
  return (
    <LineChart
      width={450}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="sell" stroke="#0F0" />
      {/* <Line type="monotone" dataKey="revenue" stroke="#8884d8" /> */}
      {/* <Line type="monotone" dataKey="investment" stroke="#FF0000" /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis dataKey="sell" />
      <Tooltip />
    </LineChart>
  );
};

export default MyLineChart;
