import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import sleep from '../img/sleep.jpeg';
import sleep2 from '../img/sleep2.jpeg';

// faqData remains unchanged
const faqData = [
  { question: "How many hours of sleep do I really need?", answer: "Adults: 7-9 hours, Teens: 8-10 hours, Children: 9-12 hours." },
  { question: "What should I do if I can't fall asleep?", answer: "Get up and do a relaxing activity like reading or meditation instead of tossing and turning." },
  { question: "Why do I wake up in the middle of the night?", answer: "Common reasons include stress, caffeine, or an uncomfortable room temperature." },
  { question: "Is it bad to use my phone in bed?", answer: "Yes, screens emit blue light, which disrupts melatonin production. Use night mode or a blue light filter if necessary." },
  { question: "Does food affect sleep?", answer: "Yes! Foods that promote sleep include magnesium-rich foods (bananas, nuts) and natural melatonin sources (cherries, oats)." },
  { question: "How can I wake up feeling more refreshed?", answer: "Stick to a consistent sleep schedule and avoid hitting the snooze button." }
];
const SleepImprovement = () => {
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
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}>
              Wellness Guide: <span style={{ color: "#2C3E50" }}>Sleep Improvement</span>
            </Typography>
            <Typography variant="h5" paragraph sx={{ 
              color: "#566573",
              textAlign: { xs: 'center', md: 'left' }
            }}>
              Practical tips for better sleep habits and improving your overall sleep quality.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Box sx={{ position: 'relative' }}>
              <img 
                src={sleep} 
                alt="Sleep Wellness"
                style={{ 
                  maxWidth: "400px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transform: "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }} 
              />
              <Box sx={{
                position: 'absolute',
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
                border: '3px solid #2C3E50',
                borderRadius: '20px',
                zIndex: -1
              }} />
            </Box>
          </motion.div>
        </Box>

        {/* Why is Sleep Important Section */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          alignItems: 'center',
          gap: 4,
          my: 8 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <img 
              src={sleep2} 
              alt="Sleep Benefits"
              style={{ 
                maxWidth: "450px",
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transform: "rotate(0deg)",
              }} 
            />
          </motion.div>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ 
              fontWeight: "bold", 
              color: "#2C3E50",
              mb: 3 
            }}>
              Why is Sleep Important?
            </Typography>
            <Typography variant="body1" paragraph>
              Sleep is when your body and mind repair, recharge, and process emotions. It helps with:
            </Typography>
            <List>
              {["Mental Health – Reduces stress, anxiety, and mood swings",
                "Physical Health – Supports heart health, immune function, and metabolism",
                "Cognitive Function – Improves focus, memory, and decision-making",
                "Energy Levels – Prevents fatigue and boosts daily performance"].map((tip, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={`✅ ${tip}`}
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
        </Box>

        {/* Rest of the sections remain unchanged */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", marginTop: 6, color: "#2C3E50" }}>
          FAQs About Sleep Improvement
        </Typography>
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

        
        {/* Enhanced button styling */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{ textAlign: 'center' }}
        >
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: "#2C3E50", 
              color: "white", 
              marginTop: 4,
              padding: "12px 30px",
              borderRadius: "30px",
              boxShadow: "0 10px 20px rgba(44, 62, 80, 0.2)",
              '&:hover': {
                backgroundColor: "#34495E",
                boxShadow: "0 15px 25px rgba(44, 62, 80, 0.3)",
              }
            }}
          >
            Start Improving Sleep
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SleepImprovement;