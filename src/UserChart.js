import React from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";
import PieCharts from "./PieCharts";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserChart = ({ data, subscribed }) => {
  return (
    <div>
      <Box sx={{ width: "100%" }} style={{ marginTop: "2rem" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <LineCharts data={data} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
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
              <PieCharts subscribed={subscribed} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserChart;
