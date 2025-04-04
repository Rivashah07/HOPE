import React from "react";
import { Box, Typography, Grid, Button, TextField, Link } from "@mui/material";

export default function FooterWithCTA() {
  return (
    <Box>
      {/* Call-to-Action Section */}
      <Box sx={{ backgroundColor: "#6a0dad", color: "white", py: 6, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Ready to prioritize your mental health?
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
          Download the Hope app today.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
         
          
        </Box>
      </Box>

      {/* Footer Section */}
      <Box sx={{ backgroundColor: "#f8f8f8", py: 6, px: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Logo & Emergency Support */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}>
              💜 Hope
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
              Providing mental health support and resources to help you on your journey to wellbeing.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold" }}>
              Emergency Support:
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              National Suicide Prevention Lifeline: 988
              <br />
              Crisis Text Line: Text HOME to 741741
            </Typography>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              RESOURCES
            </Typography>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Articles
            </Link>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Self-Help Guides
            </Link>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Professional Directory
            </Link>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Crisis Support
            </Link>
          </Grid>

          {/* Company */}
          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              COMPANY
            </Typography>
            <Link href="#" underline="none" display="block" color="text.secondary">
              About Us
            </Link>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Our Mission
            </Link>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Privacy Policy
            </Link>
            <Link href="#" underline="none" display="block" color="text.secondary">
              Terms of Service
            </Link>
          </Grid>

          {/* Stay Connected */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              STAY CONNECTED
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Sign up for our newsletter to receive updates and mental health resources.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField size="small" placeholder="Enter your email" variant="outlined" sx={{ flex: 1 }} />
              <Button variant="contained" sx={{ backgroundColor: "#7b33ff", color: "white" }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" sx={{ textAlign: "center", mt: 4, color: "text.secondary" }}>
          © 2025 Hope Mental Health, Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
