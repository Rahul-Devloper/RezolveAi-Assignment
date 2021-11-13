import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const LineCharts = ({ data }) => {
  return (
    <div>
      {/* start of linechart cmponent */}
      <LineChart
        width={700}
        height={400}
        //calling the data resource "data" as props
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
      </LineChart>
      {/* end of linechart cmponent */}
    </div>
  );
};

export default LineCharts;
