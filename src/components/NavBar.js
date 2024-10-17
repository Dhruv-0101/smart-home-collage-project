// // src/components/NavBar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           My App
//         </Typography>
//         <Box>
//           <Button color="inherit" component={Link} to="/">Home</Button>
//           <Button color="inherit" component={Link} to="/login">Login</Button>
//           <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
//           <Button color="inherit" component={Link} to="/todo">To-Do</Button>
//           <Button color="inherit" component={Link} to="/expense-tracker">Expense Tracker</Button>
//           <Button color="inherit" component={Link} to="/blog">Blog</Button>
//           <Button color="inherit" component={Link} to="/add-device">Add Device</Button>
//           <Button color="inherit" component={Link} to="/contact">Contact</Button>
//           <Button color="inherit" component={Link} to="/product-catalog">Product Catalog</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

// src/components/NavBar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Smart Home App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/todo">
            To-Do
          </Button>
          <Button color="inherit" component={Link} to="/expense-tracker">
            Expense Tracker
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/add-device">
            Add Device
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/product-catalog">
            Product Catalog
          </Button>
          <Button color="inherit" component={Link} to="/family-access">
            Family Access
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
