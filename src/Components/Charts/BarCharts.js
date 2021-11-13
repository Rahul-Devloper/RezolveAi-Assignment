import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const BarCharts = ({ data }) => {
  return (
    <div>
      {/* start of barchart component */}
      <BarChart
        width={700}
        height={400}
        //calling the data resource "data" as props
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="subscribed" fill="#8884d8" />
        <Bar dataKey="unSubscribed" fill="#82ca9d" />
      </BarChart>
      {/* end of barchart component */}
    </div>
  );
};

export default BarCharts;
