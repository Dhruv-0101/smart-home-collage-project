import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
} from "@mui/material";

const FamilyAccess = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [memberName, setMemberName] = useState("");

  const addFamilyMember = () => {
    if (memberName) {
      setFamilyMembers([
        ...familyMembers,
        {
          name: memberName,
          access: { camera: false, locker: false, devices: false },
        },
      ]);
      setMemberName(""); // Clear input field after adding
    }
  };

  const toggleAccess = (index, accessType) => {
    const updatedMembers = familyMembers.map((member, i) => {
      if (i === index) {
        return {
          ...member,
          access: {
            ...member.access,
            [accessType]: !member.access[accessType], // Toggle the access status
          },
        };
      }
      return member;
    });

    setFamilyMembers(updatedMembers);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Family Access Management
      </Typography>

      {/* Form to add family members */}
      <TextField
        label="Family Member Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addFamilyMember}
      >
        Add Family Member
      </Button>

      {/* List of family members */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {familyMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{member.name}</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={member.access.camera}
                      onChange={() => toggleAccess(index, "camera")}
                      color="primary"
                    />
                  }
                  label="Camera Access"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={member.access.locker}
                      onChange={() => toggleAccess(index, "locker")}
                      color="primary"
                    />
                  }
                  label="Locker Access"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={member.access.devices}
                      onChange={() => toggleAccess(index, "devices")}
                      color="primary"
                    />
                  }
                  label="Device Access"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FamilyAccess;
