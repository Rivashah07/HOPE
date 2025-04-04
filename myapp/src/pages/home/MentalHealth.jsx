import React from "react";
import { Box, Typography, Grid, Paper, Button} from "@mui/material";
import { Link } from "react-router-dom";

const resources = [
  {
    category: "Self-Help Guide",
    title: "Coping with Anxiety",
    description: "Learn effective techniques to manage anxiety and reduce stress in your daily life.",
    to: "/coping-with-anxiety",
  },
  {
    category: "Article",
    title: "Building Resilience",
    description: "Discover how to build emotional resilience to better handle life's challenges.",
    to: "/building-resilience",
  },
  {
    category: "Wellness Guide",
    title: "Sleep Improvement",
    description: "Practical tips for better sleep habits and improving your overall sleep quality.",
    to: "/sleep-improvement",
  },
  {
    category: "Emergency Support",
    title: "Crisis Resources",
    description: "A comprehensive list of hotlines and services available for immediate support.",
    to: "/crisis-resources",
  },
  {
    category: "Relationship Guide",
    title: "Supporting a Loved One",
    description: "How to effectively support someone who is struggling with their mental health.",
    to: "/supporting-a-loved-one",
  },
  {
    category: "Wellness Practice",
    title: "Mindfulness Practices",
    description: "Simple mindfulness exercises you can incorporate into your daily routine.",
    to: "/mindfulness-practices",
  },
];

export default function MentalHealthResources() {
  return (
    <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#f7f7f7" }}>
      {/* Section Header */}
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold" }}>
        RESOURCES
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
        Helpful mental health resources
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 4, color: "text.secondary" }}>
        Access guides, articles, and professional resources to support your mental health journey.
      </Typography>

      {/* Grid for Resource Cards */}
      <Grid container spacing={3} justifyContent="center">
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="subtitle2" sx={{ color: "#7b33ff", fontWeight: "bold" }}>
                {resource.category}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {resource.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                {resource.description}
              </Typography>
              <Button sx={{ display: "block", mt: 2, fontWeight: "bold", color: "#7b33ff" }} component={Link} to={resource.to

              }>
                Read more →
            </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
