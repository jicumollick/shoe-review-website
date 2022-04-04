import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
const MyBarChart = () => {
  return (
    <BarChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis dataKey="investment" />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" stackId="a" fill="#8884d8" />
      <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default MyBarChart;
