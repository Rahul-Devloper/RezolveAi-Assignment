import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <div>
      {/* start of Navbar component */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Users Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* end of navbar component */}
    </div>
  );
};

export default Navbar;
