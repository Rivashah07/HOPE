import React from "react";
import { Box, Typography, Paper, Button, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FooterWithCTA from "./FooterWith";
import { Link } from "react-router-dom";

export default function AIChatbot() {
  const messages = [
    { type: "user", text: "I've been feeling down for the past few days." },
    { type: "bot", text: "I'm sorry to hear you're feeling down. Would you like to talk about what might be contributing to these feelings?" },
    { type: "user", text: "I think it's work stress and not sleeping well." },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#f7f2fc" }}>
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold" }}>
        AI SUPPORT
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
        24/7 AI Chatbot Support
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 4, color: "text.secondary" }}>
        Our AI chatbot is always available to provide guidance, resources, and a listening ear when you need it.
      </Typography>

      <Paper elevation={3} sx={{ maxWidth: 400, mx: "auto", borderRadius: 3, overflow: "hidden" }}>
        <Box sx={{ p: 2, display: "flex", alignItems: "center", backgroundColor: "#7b33ff", color: "white" }}>
          <Avatar sx={{ bgcolor: "white", color: "#7b33ff", mr: 1 }}>
            <FavoriteIcon />
          </Avatar>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Hope Assistant
            </Typography>
            <Typography variant="caption">Always here to help</Typography>
          </Box>
        </Box>

        <Box sx={{ p: 2, height: 200, overflowY: "auto", backgroundColor: "#fafafa" }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                textAlign: msg.type === "user" ? "right" : "left",
                mb: 2,
              }}
            >
              <Paper
                sx={{
                  display: "inline-block",
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: msg.type === "user" ? "#f3e5f5" : "white",
                }}
              >
                {msg.text}
              </Paper>
            </Box>
          ))}
        </Box>

        <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #ddd" }}>
          <Button variant="contained" sx={{ backgroundColor: "#7b33ff", color: "#fff", borderRadius: 2 }} component={Link} to='/ai-chat'>
            Try the AI Assistant
          </Button>
        </Box>
      </Paper>
    </Box>
    
    
  );
}
