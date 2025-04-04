import React, { useState } from 'react';
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Avatar,
  IconButton
} from '@mui/material';
import { VideoCall, Send, AttachFile } from '@mui/icons-material';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');

    // TODO: Implement AI response logic
    setTimeout(() => {
      const botResponse = {
        id: Date.now(),
        text: 'I understand how you feel. Would you like to talk more about it?',
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleVideoCall = () => {
    setIsVideoCallActive(true);
    // TODO: Implement video call functionality
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // TODO: Implement file upload and AI processing
      console.log('File uploaded:', file.name);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 3, height: '80vh', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5">AI Support Chat</Typography>
            <IconButton color="primary" onClick={handleVideoCall}>
              <VideoCall />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
            <List>
              {chatHistory.map((chat) => (
                <ListItem
                  key={chat.id}
                  sx={{
                    justifyContent: chat.sender === 'user' ? 'flex-end' : 'flex-start',
                    mb: 1
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      maxWidth: '70%'
                    }}
                  >
                    {chat.sender === 'bot' && (
                      <Avatar sx={{ mr: 1, bgcolor: 'primary.main' }}>AI</Avatar>
                    )}
                    <Paper
                      sx={{
                        p: 2,
                        bgcolor: chat.sender === 'user' ? 'primary.main' : 'grey.100',
                        color: chat.sender === 'user' ? 'white' : 'text.primary'
                      }}
                    >
                      <Typography variant="body1">{chat.text}</Typography>
                    </Paper>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <input
              type="file"
              id="file-upload"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
              accept="image/*,video/*"
            />
            <IconButton
              color="primary"
              component="label"
              htmlFor="file-upload"
            >
              <AttachFile />
            </IconButton>
            <TextField
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              variant="outlined"
              size="small"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              endIcon={<Send />}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ChatBot;