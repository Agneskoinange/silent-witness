import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
import { Autocomplete } from '@mui/material';

const locations = ["New York", "Africa", "Nairobi", "Kisumu", "Nakuru", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Other"]; 
const incidents = ["Fire", "Flood", "Theft", "Accident", "Harassment", "Vandalism", "Corruption", "Other"];

const StyledBox = styled(Box)({
  marginTop: '20px',
});

export default function Report() {
  const [location, setLocation] = useState('');
  const [incident, setIncident] = useState('');
  const [details, setDetails] = useState('');

  const handleReport = () => {
    console.log(`Location: ${location}, Incident: ${incident}, Details: ${details}`);
    // Add your report submission functionality here
  };

  return (
    <Container maxWidth="md">
      <StyledBox>
        <Typography variant="h4" gutterBottom>Report Incident</Typography>

        <Box mt={2}>
          <FormControl fullWidth>
            <Autocomplete
              freeSolo
              options={locations}
              onChange={(event, newValue) => {
                setLocation(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Incident Location" />}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <Autocomplete
              freeSolo
              options={incidents}
              onChange={(event, newValue) => {
                setIncident(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Incident Type" />}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <TextField 
            fullWidth 
            multiline 
            rows={6} // increased from 4 to 6 for a taller form
            margin="normal" 
            variant="outlined" 
            label="More details" 
            value={details} 
            onChange={(event) => setDetails(event.target.value)}
          />
        </Box>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleReport}>Report Incident</Button>
        </Box>
      </StyledBox>
    </Container>
  );
}
