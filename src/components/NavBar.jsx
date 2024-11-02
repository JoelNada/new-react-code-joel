import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {/* Right side - Navigation buttons */}
          <Box>
            <Button color="inherit">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  font: "inherit",
                  color: "white",
                }}
              >
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/records"
                style={{
                  textDecoration: "none",
                  font: "inherit",
                  color: "white",
                }}
              >
                Records
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
