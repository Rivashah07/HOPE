import React from 'react';
import { Box, Typography, Card, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from './home/FirstDiv';
import MoodTracker from './home/MoodTracker';
import FeaturesSection from './home/FeatureSection';
import StepsSection from './home/Step';
import CommunityChat from './home/CommunityChat';
import AIChatbot from './home/AIChatbot';
import MentalHealthResources from './home/MentalHealth';
import FooterWithCTA from './home/FooterWith';

const Index = () => {
  return (
    <Box sx={{ p: 4 }}>
    <HeroSection/>
    <MoodTracker/>
    <FeaturesSection/>
    <StepsSection/>
    <CommunityChat/>
    <AIChatbot/>
    <MentalHealthResources/>
    <FooterWithCTA/>
  
    </Box>
  );
};

export default Index;