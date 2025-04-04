import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import Girl from '../img/Girl.jpeg';
import Anxiety from '../img/Anxiety.jpeg';

const faqData = [
  { question: "Is anxiety normal?", answer: "Yes, everyone experiences anxiety at some point. It becomes a concern when it is constant or interferes with daily life." },
  { question: "Can anxiety go away on its own?", answer: "Mild anxiety may subside with lifestyle changes, but chronic anxiety often requires self-care strategies or professional support." },
  { question: "How can I stop an anxiety attack quickly?", answer: "Focus on your breath (slow, deep breathing). Ground yourself (name five things you see, hear, and feel). Reassure yourself (tell yourself the anxiety will pass)." },
  { question: "What foods help reduce anxiety?", answer: "Magnesium-rich foods (dark chocolate, spinach), Omega-3 fatty acids (salmon, walnuts), Herbal teas (chamomile, green tea)." },
  { question: "How can I help a loved one with anxiety?", answer: "Listen without judgment, offer reassurance and patience, encourage professional help if needed." }
];


const CopingWithAnxiety = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA", minHeight: "100vh", padding: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2 }}
            sx={{ flex: 1 }}
          >
            <Typography variant="h2" gutterBottom sx={{ 
              fontWeight: "bold", 
              color: "#34495E",
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}>
              Coping with <span style={{ color: "#2C3E50" }}>Work Anxiety</span>
            </Typography>
            <Typography variant="h5" paragraph sx={{ color: "#566573" }}>
              Learn effective techniques to manage anxiety and reduce stress in your daily work life.
            </Typography>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2 }}
          >
            <img 
              src={Girl} 
              alt="Work Anxiety" 
              style={{ 
                maxWidth: "300px",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                margin: "20px"
              }} 
            />
          </motion.div>
        </Box>

        <Box sx={{ textAlign: "left", marginTop: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50", mb: 3 }}>
            Understanding Work Anxiety
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
            <img 
              src={Anxiety} 
              style={{ 
                width: "45%",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                '&:hover': {
                  transform: "scale(1.02)"
                }
              }} 
            />
            <Typography variant="body1" paragraph sx={{ flex: 1, minWidth: "300px" }}>
              Work anxiety is a feeling of unease, nervousness, or stress related to job responsibilities, deadlines, and workplace expectations.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "left", marginTop: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2C3E50" }}>Tips for Managing Work Anxiety</Typography>
          <List>
            {["Set Boundaries", "Take Breaks", "Practice Deep Breathing", "Prioritize Tasks", "Seek Support from Colleagues", "Use Relaxation Techniques"].map((tip, index) => (
              <ListItem key={index}>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </Box>
        
       
  
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", marginTop: 6, color: "#2C3E50" }}>
          FAQs About Work Anxiety
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
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="contained" sx={{ backgroundColor: "#2C3E50", color: "white", marginTop: 4 }}>Start Tracking</Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CopingWithAnxiety;