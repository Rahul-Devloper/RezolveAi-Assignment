import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const PieCharts = ({ subscribed }) => {
  return (
    <div>
      {/* start of pie chart component */}
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="subscriptions"
          isAnimationActive={false}
          //calling the data resource "subscribed" as props
          data={subscribed}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
      {/* end of pie chart component */}
    </div>
  );
};

export default PieCharts;
