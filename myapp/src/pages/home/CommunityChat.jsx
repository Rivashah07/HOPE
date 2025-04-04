import React from "react";
import { Box, Typography, Paper, Avatar, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function CommunityChat() {
  const messages = [
    {
      id: "A",
      text: "I've been feeling overwhelmed lately with work and family responsibilities. Anyone have tips for managing stress?",
      color: "#d9b3ff",
    },
    {
      id: "B",
      text: "I find that taking 10 minutes each morning for meditation helps me. Also, don't be afraid to ask for help when you need it.",
      color: "#99ccff",
    },
    {
      id: "C",
      text: "Exercise has been my lifeline. Even a short walk can clear my head when things get too much.",
      color: "#99ff99",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#f7f2fc" }}>
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold" }}>
        ANONYMOUS COMMUNITY
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
        You're never alone
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 4, color: "text.secondary" }}>
        Connect with others in a safe, anonymous environment where you can share experiences and support each other.
      </Typography>

      <Paper elevation={3} sx={{ maxWidth: 600, mx: "auto", borderRadius: 3, overflow: "hidden" }}>
        <Box sx={{ p: 2, textAlign: "left", fontWeight: "bold", borderBottom: "1px solid #ddd" }}>
          Community Chat Preview
        </Box>

        {messages.map((msg, index) => (
          <Grid
            container
            key={index}
            spacing={2}
            sx={{ p: 2, alignItems: "center", borderBottom: index < messages.length - 1 ? "1px solid #eee" : "none" }}
          >
            <Grid item>
              <Avatar sx={{ bgcolor: msg.color, fontWeight: "bold" }}>{msg.id}</Avatar>
            </Grid>
            <Grid item xs>
              <Paper sx={{ p: 1.5, backgroundColor: "#f7f7f7", borderRadius: 2 }}>{msg.text}</Paper>
            </Grid>
          </Grid>
        ))}

        <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #ddd" }}>
          <Button variant="contained" sx={{ backgroundColor: "#7b33ff", color: "#fff", borderRadius: 2 }} component={Link} to='/community'>
            Join the Community
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
