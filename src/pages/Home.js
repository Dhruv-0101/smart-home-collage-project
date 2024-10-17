// // src/pages/Home.js
// import React from 'react';
// import { Container, Typography } from '@mui/material';

// const Home = () => {
//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Welcome to the Smart Home App!
//       </Typography>
//       <Typography variant="body1">
//         Manage your smart devices, track expenses, and stay updated with blogs.
//       </Typography>
//     </Container>
//   );
// };

// export default Home;

// // src/pages/Home.js
// import React from "react";
// import { Container, Typography, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Welcome to the Smart Home App!
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         Manage your smart devices, track expenses, and stay updated with the
//         latest blogs.
//       </Typography>

//       <Box mt={4}>
//         {/* Login Button */}
//         <Button
//           variant="contained"
//           color="primary"
//           component={Link}
//           to="/login"
//           style={{ marginRight: "10px" }}
//         >
//           Login
//         </Button>

//         {/* Sign Up Button */}
//         <Button
//           variant="outlined"
//           color="primary"
//           component={Link}
//           to="/signup"
//         >
//           Sign Up
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Home;


// import React from "react";
// import { Container, Typography, Button, Box, Paper } from "@mui/material";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <Box
//       style={{
//         backgroundImage: 'url(https://imgs.search.brave.com/MqSMVPzlrErUbMajJpwOfQm3Xnqi6bSG2hEaFCoNF1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTk5/MDQ0NDQ3Mi9waG90/by9zY2FuZGluYXZp/YW4tc3R5bGUtY296/eS1saXZpbmctcm9v/bS1pbnRlcmlvci53/ZWJwP2E9MSZiPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RjVB/M2VGNm15YUpwSVR1/NUFCbkdxTmphY0dX/WXNrdXhlWnZpVS1L/cHhQRT0)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'white',
//       }}
//     >
//       <Paper
//         elevation={6}
//         style={{
//           padding: '40px',
//           borderRadius: '15px',
//           backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
//           textAlign: 'center',
//         }}
//       >
//         <Container maxWidth="sm">
//           {/* Welcome Title */}
//           <Typography
//             variant="h4"
//             component="h1"
//             gutterBottom
//             style={{ fontWeight: 'bold', marginBottom: '20px' }}
//           >
//             Welcome to the Smart Home App!
//           </Typography>

//           {/* Description */}
//           <Typography
//             variant="body1"
//             gutterBottom
//             style={{ marginBottom: '30px', fontSize: '18px' }}
//           >
//             Manage your smart devices, track expenses, and stay updated with the latest blogs.
//           </Typography>

//           {/* Button Container */}
//           <Box mt={4}>
//             {/* Login Button */}
//             <Button
//               variant="contained"
//               color="primary"
//               component={Link}
//               to="/login"
//               size="large"
//               style={{
//                 marginRight: '10px',
//                 padding: '10px 30px',
//                 borderRadius: '25px',
//                 backgroundColor: '#007bff',
//                 color: 'white',
//                 fontSize: '16px',
//               }}
//             >
//               Login
//             </Button>

//             {/* Sign Up Button */}
//             <Button
//               variant="outlined"
//               color="secondary"
//               component={Link}
//               to="/signup"
//               size="large"
//               style={{
//                 padding: '10px 30px',
//                 borderRadius: '25px',
//                 color: '#ffcc00',
//                 borderColor: '#ffcc00',
//                 fontSize: '16px',
//               }}
//             >
//               Sign Up
//             </Button>
//           </Box>
//         </Container>
//       </Paper>
//     </Box>
//   );
// };

// export default Home;


import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      style={{
        backgroundImage: 'url(https://imgs.search.brave.com/MqSMVPzlrErUbMajJpwOfQm3Xnqi6bSG2hEaFCoNF1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTk5/MDQ0NDQ3Mi9waG90/by9zY2FuZGluYXZp/YW4tc3R5bGUtY296/eS1saXZpbmctcm9v/bS1pbnRlcmlvci53/ZWJwP2E9MSZiPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RjVB/M2VGNm15YUpwSVR1/NUFCbkdxTmphY0dX/WXNrdXhlWnZpVS1L/cHhQRT0)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        style={{
          padding: '40px',
          borderRadius: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          {/* Welcome Title */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white', // White text color for title
            }}
          >
            Welcome to the Smart Home App!
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            gutterBottom
            style={{
              marginBottom: '30px',
              fontSize: '18px',
              color: 'white', // White text color for description
            }}
          >
            Manage your smart devices, track expenses, and stay updated with the latest blogs.
          </Typography>

          {/* Button Container */}
          <Box mt={4}>
            {/* Login Button */}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
              size="large"
              style={{
                marginRight: '10px',
                padding: '10px 30px',
                borderRadius: '25px',
                backgroundColor: '#007bff',
                color: 'white', // White text color for the button text
                fontSize: '16px',
              }}
            >
              Login
            </Button>

            {/* Sign Up Button */}
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/signup"
              size="large"
              style={{
                padding: '10px 30px',
                borderRadius: '25px',
                color: '#ffcc00',
                borderColor: '#ffcc00',
                fontSize: '16px',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
