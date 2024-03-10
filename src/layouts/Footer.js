import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} py={3} bgcolor="primary.main" color="white">
      <Typography variant="body1" align="center">
        © 2022 Your Company
      </Typography>
      {/* Add Google Play and Apple Store links here */}
    </Box>
  );
};

export default Footer;