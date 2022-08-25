import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const pages = [
  { name: "درباره ما", href: "#Property" },
  { name: "نمونه کار", href: "#Ability" },
  { name: "رزومه افراد", href: "#awards" },
  { name: "مهارت ها", href: "#Property" },
  { name: "سفارش پروژه", href: "#Ability" },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="bg-navbar" position="static">
      <Toolbar>
        {/* Menu Size Xs Uper */}
        <Box
          display={{ xs: "flex", md: "none" }}
          className="justify-between align-center w-100"
        >
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="borderMenu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              display={{ xs: "block", md: "none" }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  className="dividerMarginXs"
                >
                  <Link href={page.href}>
                    <Typography
                      className="font-bold"
                      color="light.light"
                      variant="body2"
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            <Box
              component="img"
              src={"/img/logo.png"}
              alt="لوگو"
              className="widthLogo styleLogoXs"
            />
          </Box>
        </Box>
        {/* Menu Size Xs Uper */}

        {/* Menu Size Md Uper */}
        <Box
          display={{ xs: "none", md: "flex" }}
          className="justify-between w-100"
          alignItems="center"
        >
          <Box className="d-flex justify-between">
            {pages.map((page, index) => (
              <MenuItem key={index}>
                <Link
                  href={page.href}
                  className="navbar-hover"
                  color="light.light"
                >
                  {page.name}
                </Link>
              </MenuItem>
            ))}
          </Box>

          <Box
            component="img"
            src={"/img/logo.png"}
            alt="لوگو"
            className="widthLogo"
          />
        </Box>
        {/* Menu Size Md Uper */}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
