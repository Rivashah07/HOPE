import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import resilience from '../img/resilience.jpg'
import Book from '../img/Book.jpeg';

// faqData remains unchanged
const faqData = [
  { question: "What is resilience?", answer: "Resilience is the ability to adapt and bounce back from adversity, stress, or challenges." },
  { question: "Can resilience be learned?", answer: "Yes, resilience can be developed through self-awareness, emotional regulation, and coping strategies." },
  { question: "How does resilience impact mental health?", answer: "Resilience helps reduce stress, improve problem-solving skills, and promote overall well-being." },
  { question: "What are some daily habits to build resilience?", answer: "Practicing mindfulness, maintaining strong social connections, and setting realistic goals." },
  { question: "How can I help others build resilience?", answer: "Encourage a positive mindset, offer emotional support, and help them develop coping skills." }
];


const BuildingResilience = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA", minHeight: "100vh", padding: 4 }}>
      <Container maxWidth="md">
        {/* Hero Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
          mb: 6 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h2" gutterBottom sx={{ 
              fontWeight: "bold", 
              color: "#34495E",
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}>
              Building <span style={{ color: "#2C3E50" }}>Resilience</span>
            </Typography>
            <Typography variant="h5" paragraph sx={{ color: "#566573" }}>
              Learn how to adapt to challenges and maintain emotional well-being in difficult situations.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Box sx={{ position: 'relative' }}>
              <img 
                src={resilience} 
                alt="Resilience"
                style={{ 
                  width: "100%",
                  maxWidth: "500px",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }} 
              />
              <Box sx={{
                position: 'absolute',
                top: 15,
                left: 15,
                right: -15,
                bottom: -15,
                border: '3px solid #2C3E50',
                borderRadius: '20px',
                zIndex: -1
              }} />
            </Box>
          </motion.div>
        </Box>

        {/* Understanding Resilience Section */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
          my: 8,
          backgroundColor: 'rgba(44, 62, 80, 0.05)',
          borderRadius: '20px',
          padding: 4
        }}>
          <Box sx={{ position: 'relative', flex: 1 }}>
            <img 
              src={Book} 
              alt="Resilience Concept"
              style={{ 
                width: "100%",
                maxWidth: "400px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              }} 
            />
            <Box sx={{
              position: 'absolute',
              top: -15,
              left: -15,
              right: 15,
              bottom: 15,
              border: '3px solid #34495E',
              borderRadius: '20px',
              zIndex: -1
            }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50", mb: 3 }}>
              Understanding Resilience
            </Typography>
            <Typography variant="body1" paragraph>
              Resilience is the ability to recover quickly from difficulties and adapt to challenging situations, helping maintain mental and emotional strength.
            </Typography>
          </Box>
        </Box>

        {/* Tips Section */}
        <Box sx={{ 
          textAlign: "left", 
          marginTop: 4,
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: 4,
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50", mb: 3 }}>
            Tips to Build Resilience
          </Typography>
          <List>
            {["Practice Self-Care", "Develop a Growth Mindset", "Strengthen Social Connections", 
              "Learn from Experiences", "Stay Optimistic", "Manage Stress Effectively"].map((tip, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={`${index + 1}. ${tip}`}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 500,
                      color: '#34495E'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* FAQs Section */}
        <Typography variant="h3" gutterBottom sx={{ 
          fontWeight: "bold", 
          marginTop: 8,
          marginBottom: 4,
          color: "#2C3E50",
          textAlign: "center" 
        }}>
          FAQs About Resilience
        </Typography>
        {/* Rest of the FAQ section remains unchanged */}
        {faqData.map((faq, index) => (
          <motion.div key={index} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Accordion sx={{ backgroundColor: "#D6DBDF", marginBottom: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
        

        {/* Enhanced Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: "#2C3E50", 
              color: "white",
              padding: "12px 30px",
              borderRadius: "30px",
              boxShadow: "0 10px 20px rgba(44, 62, 80, 0.2)",
              '&:hover': {
                backgroundColor: "#34495E",
                boxShadow: "0 15px 25px rgba(44, 62, 80, 0.3)",
              }
            }}
          >
            Start Building Resilience
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BuildingResilience;