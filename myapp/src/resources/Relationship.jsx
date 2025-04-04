import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import Kindness from "../img/Kindness.jpg";
import depression from "../img/depression.jpg";

// faqData remains unchanged
const faqData = [
  { question: "What should I do if my loved one refuses help?", answer: "Don’t force them, but gently remind them that support is available. Continue being present and listening when they’re ready." },
  { question: "How do I know if they need urgent help?", answer: "If they mention suicidal thoughts, self-harm, or hopelessness, take it seriously. Encourage immediate professional help or contact a crisis hotline." },
  { question: "What if I say the wrong thing?", answer: "No one is perfect, and it’s okay to make mistakes. The key is to be genuine, patient, and willing to listen." },
  { question: "Should I try to 'fix' their problems?", answer: "No—your role is to support, not solve. Encourage them to seek help while reassuring them that they are not alone." },
  { question: "How can I take care of my own mental health while supporting them?", answer: "Set boundaries to avoid burnout. Talk to a therapist or support group if needed. Engage in self-care activities like exercise, hobbies, and relaxation." }
];


const RelationshipSupport = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA", minHeight: "100vh", padding: 4 }}>
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
          <Box sx={{ position: 'relative', mb: 4 }}>
            <img 
              src={Kindness} 
              alt="Kindness"
              style={{ 
                maxWidth: "400px",
                width: "100%",
                height: "auto",
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <Typography variant="h2" gutterBottom sx={{ 
              fontWeight: "bold", 
              color: "#34495E",
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}>
              Relationship Guide: <span style={{ color: "#2C3E50" }}>Supporting a Loved One</span>
            </Typography>
          </motion.div>
          <Typography variant="h5" paragraph sx={{ color: "#566573" }}>
            How to effectively support someone who is struggling with their mental health.
          </Typography>

          {/* Why is Support Important Section */}
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            my: 8 
          }}>
            <Box sx={{ position: 'relative', flex: 1 }}>
              <img 
                src={depression} 
                alt="Depression Support"
                style={{ 
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
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
                Why is Support Important?
              </Typography>
              <List>
                {["Reduce feelings of loneliness", 
                  "Encourage them to seek professional help", 
                  "Improve their emotional well-being", 
                  "Strengthen your relationship and trust"].map((tip, index) => (
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

          {/* How to Support Someone Section */}
          <Box sx={{ 
            backgroundColor: 'rgba(44, 62, 80, 0.05)',
            borderRadius: '20px',
            padding: 4,
            mt: 6 
          }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50", mb: 3 }}>
              How to Support Someone
            </Typography>
            <List>
              {["Listen Without Judgment", 
                "Validate Their Feelings", 
                "Encourage Professional Help", 
                "Be Patient and Consistent", 
                "Help with Daily Tasks", 
                "Respect Their Boundaries", 
                "Take Care of Yourself Too"].map((tip, index) => (
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
            marginTop: 6, 
            color: "#2C3E50",
            textAlign: "center" 
          }}>
            FAQs About Supporting a Loved One
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
              Start Supporting
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default RelationshipSupport;
