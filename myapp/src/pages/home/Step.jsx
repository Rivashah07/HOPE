import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Track Your Mood",
      description:
        "Take a few seconds each day to record how you are feeling using our simple mood tracker.",
    },
    {
      number: "02",
      title: "Connect Support Network",
      description:
        "Add trusted friends and family who can be notified if your mood patterns indicate you need support.",
    },
    {
      number: "03",
      title: "Get Support When Needed",
      description:
        "Access our AI chatbot or anonymous community anytime, and receive timely support from your network when needed.",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#fff" }}>
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold" }}>
        HOW IT WORKS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
        Simple steps to better mental health
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: 1000, mx: "auto", mt: 4 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                textAlign: "center",
                p: 2,
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#f3e8ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                  {step.number}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
