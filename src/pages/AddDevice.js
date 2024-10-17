// // src/pages/AddDevice.js
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography } from '@mui/material';

// const AddDevice = () => {
//   const [deviceName, setDeviceName] = useState('');

//   const addDevice = () => {
//     // Add device logic
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>Add Smart Device</Typography>
//       <TextField
//         label="Device Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={deviceName}
//         onChange={(e) => setDeviceName(e.target.value)}
//       />
//       <Button variant="contained" color="primary" fullWidth onClick={addDevice}>
//         Add Device
//       </Button>
//     </Container>
//   );
// };

// export default AddDevice;

// // src/pages/AddDevice.js
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Switch,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// const AddDevice = () => {
//   const [deviceName, setDeviceName] = useState("");
//   const [devices, setDevices] = useState([]);

//   const addDevice = () => {
//     if (deviceName) {
//       const newDevice = {
//         name: deviceName,
//         isOn: false,
//       };
//       setDevices([...devices, newDevice]);
//       setDeviceName(""); // Clear the input field after adding
//     }
//   };

//   const toggleDevice = (index) => {
//     const updatedDevices = devices.map((device, i) =>
//       i === index ? { ...device, isOn: !device.isOn } : device
//     );
//     setDevices(updatedDevices);
//   };

//   const removeDevice = (index) => {
//     const updatedDevices = devices.filter((_, i) => i !== index);
//     setDevices(updatedDevices);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Add Smart Device
//       </Typography>
//       <TextField
//         label="Device Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={deviceName}
//         onChange={(e) => setDeviceName(e.target.value)}
//       />
//       <Button variant="contained" color="primary" fullWidth onClick={addDevice}>
//         Add Device
//       </Button>

//       <List>
//         {devices.map((device, index) => (
//           <ListItem
//             key={index}
//             secondaryAction={
//               <IconButton
//                 edge="end"
//                 aria-label="delete"
//                 onClick={() => removeDevice(index)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             }
//           >
//             <ListItemText
//               primary={device.name}
//               secondary={`Status: ${device.isOn ? "On" : "Off"}`}
//             />
//             <Switch
//               checked={device.isOn}
//               onChange={() => toggleDevice(index)}
//               inputProps={{ "aria-label": "controlled" }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default AddDevice;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Switch,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";

const Background = styled("div")({
  backgroundImage: 'url("https://imgs.search.brave.com/R7RKdx8nZMmBnZTS4YXUbkSt3ZbZHa3ZrR07qru_cJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM0Lzg2/Lzg0LzM0ODY4NDg3/NDQwZDFmNmE5Yjg5/ZDg1YjU0ZmVjMTg5/LmpwZw")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "40px 0",
});

const StyledContainer = styled(Paper)({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "auto",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: "#007BFF",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

const StyledListItem = styled(ListItem)({
  borderBottom: "1px solid #ddd",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const AddDevice = () => {
  const [deviceName, setDeviceName] = useState("");
  const [devices, setDevices] = useState([]);

  const addDevice = () => {
    if (deviceName) {
      const newDevice = {
        name: deviceName,
        isOn: false,
      };
      setDevices([...devices, newDevice]);
      setDeviceName(""); // Clear the input field after adding
    }
  };

  const toggleDevice = (index) => {
    const updatedDevices = devices.map((device, i) =>
      i === index ? { ...device, isOn: !device.isOn } : device
    );
    setDevices(updatedDevices);
  };

  const removeDevice = (index) => {
    const updatedDevices = devices.filter((_, i) => i !== index);
    setDevices(updatedDevices);
  };

  return (
    <Background>
      <StyledContainer elevation={3}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          style={{ fontWeight: "bold" }}
        >
          Smart Device Manager
        </Typography>
        <TextField
          label="Device Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <StyledButton variant="contained" fullWidth onClick={addDevice}>
          Add Device
        </StyledButton>

        {/* List of Devices */}
        <List>
          {devices.map((device, index) => (
            <StyledListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeDevice(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={device.name}
                secondary={`Status: ${device.isOn ? "On" : "Off"}`}
              />
              <Switch
                checked={device.isOn}
                onChange={() => toggleDevice(index)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </StyledListItem>
          ))}
        </List>
      </StyledContainer>
    </Background>
  );
};

export default AddDevice;
