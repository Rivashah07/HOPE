import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUserName }) => { // ✅ Ensure setUserName is received
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const user = { fullName, email };
    localStorage.setItem("user", JSON.stringify(user));
    
    setUserName(fullName); // ✅ Call setUserName to update Navbar dynamically
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, textAlign: "center" ,}}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField label="Full Name" fullWidth margin="normal" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: "#8B5CF6" }} fullWidth>
            Login
          </Button>
          <Typography  sx={{ cursor: 'pointer', mt: 2 }}>Don’t Have Account?<Link to='/signup' style={{textDecoration:'none'}}> SignUp</Link></Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
