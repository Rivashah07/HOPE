import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000';

const Signup = ({ onSwitch }) => {
    const [form, setForm] = useState({ fullName: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/signup`, form);
            alert(response.data.message);
            onSwitch(); 
        } catch (err) {
            alert(err.response?.data?.message || "Error signing up");
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4">Sign Up</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} margin="normal" required />
                    <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} margin="normal" required />
                    <TextField fullWidth label="Password" name="password" type="password" onChange={handleChange} margin="normal" required />
                    <Button fullWidth variant="contained" sx={{backgroundColor: "#8B5CF6"}} type="submit">Sign Up</Button>
                </form>
                <Typography onClick={onSwitch} sx={{ cursor: 'pointer', mt: 2 }}>Already have an account?<Link to='/login' style={{textDecoration:'none'}}> Login</Link></Typography>
            </Box>
        </Container>
    );
};

export default Signup;
