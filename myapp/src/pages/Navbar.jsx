import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userName, setUserName }) => {
  const navigate = useNavigate();

  // Load username from localStorage on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserName(JSON.parse(storedUser).fullName);
    }
  }, [setUserName]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName(null);
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#8B5CF6" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component={Link} to="/" sx={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
            Hope
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/mood-tracker" sx={{ color: "white" }}>
              Mood Tracker
            </Button>
            <Button color="inherit" component={Link} to="/ai-chat" sx={{ color: "white" }}>
              AI Chat
            </Button>
            <Button color="inherit" component={Link} to="/community" sx={{ color: "white" }}>
              Community
            </Button>
            {/* <Button color="inherit" component={Link} to="/MentalHealthMonitor" sx={{ color: "white"}}>
            MentalHealthMonitor
            </Button> */}
            
            {userName ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "white", fontWeight: "bold", mr: 2 }}>
                  Welcome, {userName}
                </Typography>
                <Button color="inherit" onClick={handleLogout} sx={{ color: "black", background: "white", fontWeight: "bold" }}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Button color="inherit" component={Link} to="/login" sx={{ color: "black", background: "white", fontWeight: "bold" }}>
                Log In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
