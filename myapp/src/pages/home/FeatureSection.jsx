import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { BarChart, Notifications, ChatBubble, Group } from "@mui/icons-material";

export default function FeaturesSection() {
  return (
    <Box sx={{ backgroundColor: "#f9fafb", py: 8, textAlign: "center" }}>
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold" }}>
        FEATURES
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
        Supporting your mental wellbeing
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: "auto", mt: 1 }}>
        Hope provides tools and resources to help you manage your mental health journey.
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
        <FeatureCard
          icon={<BarChart fontSize="large" />}
          title="Mood Tracking"
          description="Track your daily mood to identify patterns and triggers that affect your mental wellbeing."
        />
        <FeatureCard
          icon={<Notifications fontSize="large" />}
          title="Alert System"
          description="Automatically notify trusted contacts when your mood patterns indicate you might need support."
        />
        <FeatureCard
          icon={<ChatBubble fontSize="large" />}
          title="AI Chatbot"
          description="Access our supportive AI chatbot anytime for guidance, coping strategies, and resources."
        />
        <FeatureCard
          icon={<Group fontSize="large" />}
          title="Anonymous Community"
          description="Connect with others in our anonymous chat forum to share experiences and support each other."
        />
      </Grid>
    </Box>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Grid item xs={12} sm={6}>
      <Paper sx={{ display: "flex", alignItems: "center", p: 2, gap: 2, borderRadius: 2 }}>
        <Box sx={{ backgroundColor: "purple", color: "white", p: 1.5, borderRadius: 2 }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
