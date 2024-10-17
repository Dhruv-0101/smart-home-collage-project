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

// src/pages/AddDevice.js
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add Smart Device
      </Typography>
      <TextField
        label="Device Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={deviceName}
        onChange={(e) => setDeviceName(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={addDevice}>
        Add Device
      </Button>

      <List>
        {devices.map((device, index) => (
          <ListItem
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
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AddDevice;
