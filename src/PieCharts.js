import React from "react";
import { BarChart, Bar, PieChart, Pie, Tooltip } from "recharts";

const PieCharts = ({ subscribed }) => {
  return (
    <div>
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="subscriptions"
          isAnimationActive={false}
          data={subscribed}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieCharts;
