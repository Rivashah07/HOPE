import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import mindfulness from "../img/mindfulness.jpg";
import GettyImages from"../img/GettyImages.jpg";

// faqData remains unchanged
const faqData = [
  { question: "Do I need to meditate to practice mindfulness?", answer: "No! While meditation is a great mindfulness tool, simple activities like breathing exercises, mindful walking, or gratitude journaling also help." },
  { question: "How long should I practice mindfulness each day?", answer: "Even 5-10 minutes a day can make a difference. Start small and gradually increase as it becomes a habit." },
  { question: "Can mindfulness help with anxiety?", answer: "Yes, mindfulness reduces overthinking, stress, and negative thought patterns, helping to manage anxiety." },
  { question: "What if I get distracted while practicing mindfulness?", answer: "It’s completely normal! When distractions happen, gently bring your focus back without judgment." },
  { question: "Can I practice mindfulness while doing daily activities?", answer: "Absolutely! You can be mindful while eating, walking, working, or even washing dishes—just focus on the present moment." }
];


const MindfulnessPractices = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA", minHeight: "100vh", padding: { xs: 2, md: 4 } }}>
      {/* Hero Section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        mb: 6 
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Box sx={{ 
            position: 'relative', 
            width: '100%',
            maxWidth: '800px',
            mb: 4 
          }}>
            <img 
              src={mindfulness} 
              alt="Mindfulness"
              style={{ 
                width: "100%",
                height: "400px",
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

        <Container maxWidth="md">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.2 }}
          >
            <Typography variant="h2" gutterBottom sx={{ 
              fontWeight: "bold", 
              color: "#34495E",
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}>
              Wellness Guide: <span style={{ color: "#2C3E50" }}>Mindfulness Practices</span>
            </Typography>
          </motion.div>

          {/* Second Image Section */}
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            my: 6 
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" paragraph sx={{ 
                color: "#566573",
                textAlign: { xs: 'center', md: 'left' }
              }}>
                Simple mindfulness exercises you can incorporate into your daily routine.
              </Typography>
            </Box>
            <Box sx={{ position: 'relative', flex: 1 }}>
              <img 
                src={GettyImages} 
                alt="Mindfulness Practice"
                style={{ 
                  width: "100%",
                  maxWidth: "500px",
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
          </Box>

          {/* Benefits Section */}
          <Box sx={{ 
            backgroundColor: 'rgba(44, 62, 80, 0.05)',
            borderRadius: '20px',
            padding: 4,
            mt: 6 
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: "bold", 
              color: "#2C3E50",
              mb: 3 
            }}>
              Why is Mindfulness Important?
            </Typography>
            <List>
              {["Reduce stress and anxiety", 
                "Improve focus and concentration", 
                "Enhance emotional regulation", 
                "Promote better sleep and relaxation", 
                "Increase self-awareness and gratitude"].map((benefit, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={`✅ ${benefit}`}
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

          {/* Exercises Section */}
          <Box sx={{ 
            mt: 6,
            p: 4,
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            backgroundColor: '#fff'
          }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50", mb: 3 }}>
              Simple Mindfulness Exercises
            </Typography>
            <List>
              {/* Existing exercises list */}
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
            FAQs About Mindfulness Practices
          </Typography>
          {/* Existing FAQ section */}
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
              Start Mindfulness Practice
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default MindfulnessPractices;