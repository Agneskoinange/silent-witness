import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.jpg';
import pic3 from '../../assets/pic3.jpg';

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
});

const StyledLeftContainer = styled('div')({
  flex: '1',
  textAlign: 'center',
});

const StyledRightContainer = styled('div')({
  flex: '1',
  textAlign: 'center',
});

const StyledLogo = styled('img')({
  width: '200px',
  marginBottom: '20px',
});

const StyledButton = styled(Button)({
  marginTop: '10px',
});

const Home = () => {
  return (
    <StyledContainer>
      <StyledLeftContainer>
        <Typography variant="h4" component="h1">
          Welcome to Silent Witness
        </Typography>
        <StyledLogo src={pic3} alt="Silent Witness Logo" />
        <Typography variant="body1">
          An anonymous reporting platform for those afraid to share in society
        </Typography>
      </StyledLeftContainer>
      <StyledRightContainer>
        <Link to="/login">
          <StyledButton variant="contained">Login</StyledButton>
        </Link>
        <Typography variant="h6">Don't have an account?</Typography>
        <Link to="/signup">
          <StyledButton variant="contained">Signup</StyledButton>
        </Link>
      </StyledRightContainer>
    </StyledContainer>
  );
};

export default Home;

