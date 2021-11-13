import React from "react";
import LineCharts from "../Components/Charts/LineCharts";
import BarCharts from "../Components/Charts/BarCharts";
import PieCharts from "../Components/Charts/PieCharts";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

//material ui code for grid cards
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserChart = ({ data, subscribed }) => {
  return (
    <div>
      {/* start of grid system */}
      <Box sx={{ width: "100%" }} style={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <h4>Total Users Added Per Day</h4>
              {/* defining the props "data" */}
              <LineCharts data={data} />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <h4>No. of Users subscribed and unsubscribed per day</h4>
              {/* defining the props "data" */}
              <BarCharts data={data} />
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Item>
              <h4>No. of User Subscriptions per day</h4>
              {/* defining the props "subscribed" */}
              <PieCharts subscribed={subscribed} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* end of grid system */}
    </div>
  );
};

export default UserChart;
