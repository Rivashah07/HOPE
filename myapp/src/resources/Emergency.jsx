import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import emergency from '../img/emergency.jpg';
import images from "../img/images.jpeg";

// faqData remains unchanged
const faqData = [
  { question: "What should I do if I’m feeling suicidal or overwhelmed?", answer: "Reach out to a crisis hotline immediately. Talk to a trusted friend, family member, or therapist. Remember, you are not alone, and help is available." },
  { question: "Are crisis hotlines free?", answer: "Yes, most crisis hotlines are free, 24/7, and confidential." },
  { question: "Can I contact a crisis service if I’m not suicidal but just need help?", answer: "Absolutely! Crisis hotlines offer support for stress, anxiety, depression, and emotional struggles." },
  { question: "What if I don’t want to talk on the phone?", answer: "Many services offer text, chat, or online support if speaking feels overwhelming." },
  { question: "How can I help a friend in crisis?", answer: "Listen without judgment. Encourage them to reach out for professional help. If they are in immediate danger, call emergency services." },
  { question: "What if I need long-term support?", answer: "Consider talking to a therapist, counselor, or support group. Mental health care is a journey—help is available beyond crisis moments." }
];


const CrisisSupport = () => {
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
              Emergency Support: <span style={{ color: "#2C3E50" }}>Crisis Resources</span>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Box sx={{ position: 'relative' }}>
              <img 
                src={emergency} 
                alt="Emergency Support"
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

        {/* Description Section with Image */}
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
          >
            <Box sx={{ position: 'relative' }}>
              <img 
                src={images} 
                alt="Support Services"
                style={{ 
                  maxWidth: "450px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  transform: "rotate(0deg)",
                }} 
              />
              <Box sx={{
                position: 'absolute',
                top: 10,
                left: 10,
                right: -10,
                bottom: -10,
                border: '3px solid #34495E',
                borderRadius: '20px',
                zIndex: -1
              }} />
            </Box>
          </motion.div>
          <Typography variant="h5" paragraph sx={{ 
            color: "#566573",
            flex: 1,
            textAlign: { xs: 'center', md: 'left' }
          }}>
            A comprehensive list of hotlines and services available for immediate support.
          </Typography>
        </Box>

        {/* Emergency Hotlines Section */}
        <Box sx={{ 
          backgroundColor: 'rgba(44, 62, 80, 0.05)', 
          borderRadius: '20px',
          padding: 4,
          mt: 6 
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: "bold", 
            color: "#2C3E50", 
            marginBottom: 3,
            textAlign: 'center'
          }}>
            📞 Emergency Hotlines and Crisis Services
          </Typography>
          <List>
            {[
              "988 Suicide & Crisis Lifeline – Call or text 988 (US)",
              "Crisis Text Line – Text HELLO to 741741 (US)",
              "Talk Suicide Canada – Call 1-833-456-4566 (Canada)",
              "Samaritans – Call 116 123 (UK)",
              "Lifeline Australia – Call 13 11 14 (Australia)",
              "Vandrevala Foundation Helpline – Call 1860 266 2345 (India)"
            ].map((service, index) => (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                key={index}
              >
                <ListItem>
                  <ListItemText 
                    primary={`✅ ${service}`}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 500,
                        color: '#34495E'
                      }
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>

        {/* FAQs Section */}
        <Typography variant="h3" gutterBottom sx={{ 
          fontWeight: "bold", 
          marginTop: 6, 
          color: "#2C3E50",
          textAlign: "center" 
        }}>
          FAQs About Crisis Support
        </Typography>
        {faqData.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Accordion sx={{ 
              backgroundColor: "#D6DBDF", 
              marginBottom: 1,
              borderRadius: '8px',
              '&:before': { display: 'none' }
            }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography sx={{ fontWeight: 500 }}>{faq.question}</Typography>
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
            Start Tracking
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CrisisSupport;