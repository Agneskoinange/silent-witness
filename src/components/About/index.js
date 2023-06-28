import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import pic2 from '../../assets/pic2.jpg';

const StyledContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
  backgroundImage: `url(${pic2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const OverlayBox = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  borderRadius: '15px',
  padding: '30px',
  margin: '0 auto',
});

const About = () => (
  <StyledContainer maxWidth="xl">
    <OverlayBox maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        About Silent Witness
      </Typography>

      <Typography variant="body1" align="justify">
        Silent Witness is a digital platform designed to facilitate the secure and anonymous reporting of incidents. Our goal is to create an environment where individuals feel safe to report any incidents without fear of retribution or harm. This platform helps to enhance transparency, accountability, and ultimately, trust within communities.
      </Typography>

      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
        How to Use the App
      </Typography>

      <Typography variant="body1" align="justify">
        To start using the Silent Witness app, you need to first create an account or log in. Once you are logged in, you can report incidents by clicking the 'Report' button on the navigation bar. Fill in the required fields, providing as much detail as possible, and then submit your report. Your report will be securely sent and processed promptly.
      </Typography>
    </OverlayBox>
  </StyledContainer>
);

export default About;

