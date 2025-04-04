import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import img from '../../img/person sitting peacfully.jpg'

const HeroSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={4} sx={{ minHeight: "80vh" }}>
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" fontWeight="bold">
            Your mental health <br />
            <span style={{ color: "#8B5CF6" }}>matters to us</span>
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Hope helps you track your mood and connect with support when you
            need it most. We're here to ensure no one faces their struggles
            alone.
            <br/><br/>
            At Hope, we believe that no one should suffer in silence. Our mission is to provide a safe space for individuals struggling with mental health challenges by offering support, guidance, and a sense of community.
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" sx={{ mr: 2, backgroundColor: "#8B5CF6" }} component={Link} to='/mood-tracker'>
                Start Tracking
            </Button>
           
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img src={img} style={{width:'80%'}}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
