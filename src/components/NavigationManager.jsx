import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Categories from "./Categories";
import UserContext from "../context/UserContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const NavigationManager = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  function logOut() {
    const loggedOutUserObj = {};
    setLoggedInUser(loggedOutUserObj);
    setAnchorElNav(null);
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                NC MARKETPLACE
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography textAlign="center">Buy</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/sell">
                    <Typography textAlign="center">Sell</Typography>
                  </Link>
                </MenuItem>
                {loggedInUser.username ? (
                  <>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to={`/user/${loggedInUser.username}`}>
                        <Typography textAlign="center">User</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={logOut}>
                      <Link to={`/login`}>
                        <Typography textAlign="center">Logout</Typography>
                      </Link>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="/login">
                        <Typography textAlign="center">Login</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="/signup">
                        <Typography textAlign="center">Sign Up</Typography>
                      </Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>

            <Link to="/">
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                NC MARKETPLACE
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Buy
                </Button>
              </Link>
              <Link to="/sell">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Sell
                </Button>
              </Link>
              {loggedInUser.username ? (
                <>
                  <Link to={`/user/${loggedInUser.username}`}>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      User
                    </Button>
                  </Link>
                  <Link to={`/login`}>
                    <Button
                      onClick={logOut}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      Logout
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {loggedInUser.username ? (
                <Link to={`/user/${loggedInUser.username}`}>
                  <Avatar
                    alt="Logged in User profile picture"
                    src={`${loggedInUser.avatar_url}`}
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

// const NavigationManager = () => {
//   const { loggedInUser } = useContext(UserContext);
//   return (
//     <>
//       <ul>
//         <li>
//           <Categories />
//         </li>
//         <li>
//           <Link to="/sell">
//             <button>Sell</button>
//           </Link>
//         </li>
//         <li>
//           {loggedInUser.username ? (
//             <Link to={`/user/${loggedInUser.username}`}>
//               <button>User</button>
//             </Link>
//           ) : (
//             <>
//               <Link to="/login">
//                 <button>Login</button>
//               </Link>
//               <Link to="/signup">
//                 <button>Sign Up</button>
//               </Link>
//             </>
//           )}
//         </li>
//       </ul>
//     </>
//   );
// };
export default NavigationManager;
