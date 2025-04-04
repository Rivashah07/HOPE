import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid, Link } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const moodOptions = [
  { label: "Very Low", icon: <SentimentVeryDissatisfiedIcon />, color: "#F87171" },
  { label: "Low", icon: <SentimentDissatisfiedIcon />, color: "#FACC15" },
  { label: "Neutral", icon: <SentimentNeutralIcon />, color: "#FBBF24" },
  { label: "Good", icon: <SentimentSatisfiedIcon />, color: "#4ADE80" },
  { label: "Excellent", icon: <SentimentVerySatisfiedIcon />, color: "#A855F7" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setMoodHistory((prev) => [...prev, { mood, date: new Date().toLocaleString() }]); // Store with timestamp
    setTimeout(() => setSelectedMood(null), 3000);
  };

  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="subtitle2" sx={{ color: "#8B5CF6", fontWeight: "bold", mb: 1 }}>
        MOOD TRACKER
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        How are you feeling today?
      </Typography>
      <Typography variant="body1" sx={{ color: "gray", maxWidth: "600px", mx: "auto" }}>
        Track your mood daily to help identify patterns and get support when you need it.
      </Typography>

      <Box
        sx={{
          backgroundColor: "#F5EFFF",
          borderRadius: 4,
          p: 3,
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          maxWidth: "700px",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
          {moodOptions.map((mood, index) => (
            <Grid
              item
              key={index}
              sx={{
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.2s",
                transform: selectedMood === mood ? "scale(1.2)" : "scale(1)",
              }}
              onClick={() => handleMoodClick(mood)}
            >
              {React.cloneElement(mood.icon, { sx: { fontSize: 50, color: mood.color } })}
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontWeight: selectedMood === mood ? "bold" : "normal",
                  color: selectedMood === mood ? mood.color : "black",
                }}
              >
                {mood.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {selectedMood && (
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: "#4ADE80",
              fontWeight: "bold",
              backgroundColor: "#ECFDF5",
              p: 2,
              borderRadius: 2,
            }}
          >
            Your mood tracked! Thank you for sharing. 😊
          </Typography>
        )}

        <Card sx={{ maxWidth: 500, borderRadius: 3, boxShadow: 2, mt: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Your Mood History
            </Typography>
            <Box
              sx={{
                backgroundColor: "#F3F4F6",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
              }}
            >
              {moodHistory.length > 0 ? (
                moodHistory
                  .slice(-5) // Show last 5 entries
                  .map((entry, index) => (
                    <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                      <span style={{ fontWeight: "bold", color: entry.mood.color }}>
                        {entry.mood.label}
                      </span>{" "}
                      - {entry.date}
                    </Typography>
                  ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  Track your mood daily to see patterns here
                </Typography>
              )}
            </Box>
            <Link
              href="#"
              sx={{
                display: "block",
                mt: 2,
                color: "#8B5CF6",
                fontWeight: "bold",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => alert("Detailed history feature coming soon!")}
            >
              View detailed history →
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MoodTracker;
