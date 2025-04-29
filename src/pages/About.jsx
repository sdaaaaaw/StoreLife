import React from "react";
import { Container, Typography, Box, Button, Stack, Avatar } from "@mui/material";
import {Link} from "@mui/material";
 export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" mb={5}>
        <Avatar
          alt="Your Name"
          
          sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hi, My name is Lord! 
        </Typography>
        <Typography variant="body1" >
          I'm a [Frontend Developer / Artist / Business Owner] passionate about web development.
        </Typography>
      </Box>

      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          My Story 
        </Typography>
        <Typography variant="body1" >
          Ever since [short story — e.g., I built my first website at 15], I've been hooked on frontend dev.
          With  1 year of experience, I've worked on ecommerce Portfolio .
          I'm driven by my main motivation.
        </Typography>
      </Box>

      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          What I Believe In 
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" >• Creativity and innovation</Typography>
          <Typography variant="body1" >• Clear communication</Typography>
          <Typography variant="body1" >• Building things that make a difference</Typography>
        </Stack>
      </Box>

      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          A Few Fun Facts 
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1" >• I can solve a Rubik's Cube in under 29 minutes.</Typography>
          <Typography variant="body1" >• I'm a huge fan of Rayan Gosling ande Vergil.</Typography>
          <Typography variant="body1" >• On weekends, you'll find me doing nothing.</Typography>
        </Stack>
      </Box>

      <Box textAlign="center">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Checkout the Store
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
         
        >
          Store
        </Button>
      </Box>
    </Container>
  );
};


