import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './pages/Navbar';
import AIChat from './pages/AIchat';
import Community from './pages/Community';
import Index from './pages/Index';
import MoodTracker from './pages/Mood_Tracker';
import CopingWithAnxiety from './resources/Anxiety';
import BuildingResilience from './resources/Resilience';
import SleepImprovement from './resources/Sleep';
import CrisisSupport from './resources/Emergency';
import RelationshipSupport from './resources/Relationship';
import MindfulnessPractices from './resources/Mindful';
import Login from './components/Login';
import Signup from './components/Signup';
import { MentalHealthMonitor } from './components/MentalHealthMonitor';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077b6', // Calming blue color
    },
    secondary: {
      main: '#ffb6b6', 
    },
    background: {
      default: '#f8f9fa', // Soft Light Grey
    },
    text: {
      primary: '#212529', // Dark Grey for readability
    },
  },
});
  

const  App = () => {

  const [userName, setUserName] = useState(null);


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar userName={userName} setUserName={setUserName} />
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/community" element={<Community />} />
          <Route path='/coping-with-anxiety' element={<CopingWithAnxiety/>}/>
          <Route path= '/building-resilience'element={<BuildingResilience/>}/>
          <Route path="/sleep-improvement" element={<SleepImprovement/>} />
          <Route path="/supporting-a-loved-one" element={<RelationshipSupport/>}/>
          <Route path="/crisis-resources" element={<CrisisSupport/>}/>
          <Route path= "/mindfulness-practices" element={<MindfulnessPractices/>}/>
          <Route path="/login" element={<Login setUserName={setUserName} />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/MentalHealthMonitor" element={<MentalHealthMonitor/>} />
          <Route path='/EmergencyContactManager' element={<MentalHealthMonitor/>} />
          <Route path='/NotificationPreference' element={<MentalHealthMonitor/>} />
          <Route path='/ Dashboard' element={<MentalHealthMonitor/>} />
          <Route path='/App' element={<MentalHealthMonitor/>} />
          
        </Routes>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
