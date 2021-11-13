import React from "react";
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

const Grids = ({ data }) => {
  const amountTotal = data.map((a) => a.total);
  let latestTotal = Math.max(...amountTotal);
  console.log(latestTotal);

  const amountActive = data.map((a) => a.active);
  let latestActive = Math.max(...amountActive);

  const amountSubscribed = data.map((a) => a.subscribed);
  let latestSubscribed = Math.max(...amountSubscribed);

  return (
    <div>
      <Box sx={{ width: "100%" }} style={{ marginTop: "2rem" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Item style={{ backgroundColor: "#1976d2", color: "white" }}>
              <h3>
                Max Users Added in a day
                <br />
                {latestTotal}
              </h3>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ backgroundColor: "#1976d2", color: "white" }}>
              <h3>
                Max Active Users in a day <br />
                {latestActive}
              </h3>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ backgroundColor: "#1976d2", color: "white" }}>
              <h3>
                Total Subscribed <br />
                {latestSubscribed}
              </h3>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Grids;
