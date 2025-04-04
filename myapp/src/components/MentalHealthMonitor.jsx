// src/components/MentalHealthMonitor.js
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Bell } from 'lucide-react';

// Mock API service for monitoring mental health indicators
// In a real implementation, this would connect to your assessment system
const mentalHealthService = {
  fetchUserStatus: async (userId) => {
    // This would be replaced with actual API calls to your assessment backend
    // For demo purposes, we're returning mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock response - in production this would come from your assessment algorithms
        resolve({
          userId: userId,
          timestamp: new Date().toISOString(),
          indicators: {
            depression: {
              level: Math.random() > 0.7 ? 'high' : 'normal',
              confidence: 0.85,
            },
            anxiety: {
              level: Math.random() > 0.8 ? 'elevated' : 'normal',
              confidence: 0.78,
            },
            suicidalIdeation: {
              level: Math.random() > 0.9 ? 'present' : 'not-detected',
              confidence: 0.92,
            }
          },
          previousReadings: [
            // Historical data would be important for trend analysis
            // This would come from your database
          ]
        });
      }, 1000);
    });
  },
  
  sendAlert: async (userId, alertType, contacts) => {
    // In production, this would trigger your notification system
    console.log(`Alert sent for user ${userId}: ${alertType} to ${contacts.length} contacts`);
    return true;
  }
};

// Main monitoring component
const MentalHealthMonitor = ({ userId, emergencyContacts }) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertSent, setAlertSent] = useState(false);
  
  // Setting up monitoring intervals
  useEffect(() => {
    const checkStatus = async () => {
      setLoading(true);
      try {
        const userData = await mentalHealthService.fetchUserStatus(userId);
        setStatus(userData);
        
        // Check if alerts should be triggered
        const needsAlert = detectCriticalStatus(userData.indicators);
        if (needsAlert && !alertSent) {
          const alertType = determineAlertType(userData.indicators);
          await mentalHealthService.sendAlert(userId, alertType, emergencyContacts);
          setAlertSent(true);
          
          // Reset alert flag after 12 hours to prevent alert fatigue
          setTimeout(() => setAlertSent(false), 12 * 60 * 60 * 1000);
        }
      } catch (error) {
        console.error("Error fetching mental health status:", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Initial check
    checkStatus();
    
    // Set up regular monitoring interval (every 3 hours)
    // In production, you might adjust this based on user risk level
    const intervalId = setInterval(checkStatus, 3 * 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, [userId, emergencyContacts, alertSent]);
  
  // Detect if status requires sending an alert
  const detectCriticalStatus = (indicators) => {
    return (
      indicators.depression.level === 'high' ||
      indicators.anxiety.level === 'elevated' ||
      indicators.suicidalIdeation.level === 'present'
    );
  };
  
  // Determine what type of alert to send
  const determineAlertType = (indicators) => {
    if (indicators.suicidalIdeation.level === 'present') {
      return 'URGENT_SUICIDE_RISK';
    } else if (indicators.depression.level === 'high') {
      return 'HIGH_DEPRESSION';
    } else {
      return 'ELEVATED_ANXIETY';
    }
  };
  
  if (loading) {
    return <div className="p-4">Monitoring mental health indicators...</div>;
  }
  
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-2">Mental Health Monitor</h3>
      
      <div className="space-y-3 mt-4">
        {status && (
          <>
            <StatusIndicator 
              title="Depression" 
              status={status.indicators.depression.level} 
              confidence={status.indicators.depression.confidence}
            />
            
            <StatusIndicator 
              title="Anxiety" 
              status={status.indicators.anxiety.level} 
              confidence={status.indicators.anxiety.confidence}
            />
            
            <StatusIndicator 
              title="Suicidal Ideation" 
              status={status.indicators.suicidalIdeation.level} 
              confidence={status.indicators.suicidalIdeation.confidence}
            />
            
            {alertSent && (
              <div className="mt-4 p-3 bg-amber-100 rounded flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-700" />
                <span className="text-amber-800">
                  Alert sent to emergency contacts
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Component to display individual mental health indicators
const StatusIndicator = ({ title, status, confidence }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'high':
      case 'elevated':
      case 'present':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'high':
        return 'High Risk';
      case 'elevated':
        return 'Elevated';
      case 'present':
        return 'Present - Urgent';
      case 'moderate':
        return 'Moderate';
      default:
        return 'Normal';
    }
  };
  
  return (
    <div className={`flex justify-between items-center p-3 rounded border ${getStatusColor()}`}>
      <div className="flex items-center gap-2">
        {(status === 'high' || status === 'elevated' || status === 'present') && (
          <AlertTriangle className="h-5 w-5" />
        )}
        <span className="font-medium">{title}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-medium">{getStatusText()}</span>
        <span className="text-xs opacity-70">Confidence: {Math.round(confidence * 100)}%</span>
      </div>
    </div>
  );
};

export { MentalHealthMonitor };

// src/components/EmergencyContactManager.js

import { PlusCircle, Trash2 } from 'lucide-react';

const EmergencyContactManager = ({ contacts, onAddContact, onRemoveContact }) => {
  const [newContact, setNewContact] = useState({ name: '', relationship: '', phone: '', email: '' });
  const [showForm, setShowForm] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({ ...newContact, id: Date.now() });
    setNewContact({ name: '', relationship: '', phone: '', email: '' });
    setShowForm(false);
  };
  
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Emergency Contacts</h3>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Add Contact</span>
        </button>
      </div>
      
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={newContact.name}
                onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                className="w-full rounded border p-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Relationship</label>
              <input
                type="text"
                value={newContact.relationship}
                onChange={(e) => setNewContact({...newContact, relationship: e.target.value})}
                className="w-full rounded border p-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={newContact.phone}
                onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                className="w-full rounded border p-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={newContact.email}
                onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                className="w-full rounded border p-2"
                required
              />
            </div>
          </div>
          
          <div className="mt-3 flex justify-end">
            <button 
              type="button" 
              onClick={() => setShowForm(false)}
              className="px-3 py-1 mr-2 rounded border hover:bg-gray-100"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save Contact
            </button>
          </div>
        </form>
      )}
      
      {contacts.length === 0 ? (
        <p className="text-gray-500 italic">No emergency contacts added yet</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map(contact => (
            <li key={contact.id} className="flex justify-between items-center p-3 border rounded hover:bg-gray-50">
              <div>
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-gray-600">{contact.relationship}</div>
                <div className="text-sm">{contact.phone} • {contact.email}</div>
              </div>
              <button 
                onClick={() => onRemoveContact(contact.id)}
                className="p-1 text-red-600 hover:text-red-800"
                aria-label="Remove contact"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { EmergencyContactManager };

// src/components/NotificationPreferences.js


const NotificationPreferences = ({ preferences, onUpdatePreferences }) => {
  const [localPrefs, setLocalPrefs] = useState(preferences);
  
  const handleChange = (key, value) => {
    const updatedPrefs = { ...localPrefs, [key]: value };
    setLocalPrefs(updatedPrefs);
    onUpdatePreferences(updatedPrefs);
  };
  
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Alert Triggers</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localPrefs.alertOnDepression}
                onChange={(e) => handleChange('alertOnDepression', e.target.checked)}
                className="mr-2"
              />
              Alert for depression indicators
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localPrefs.alertOnAnxiety}
                onChange={(e) => handleChange('alertOnAnxiety', e.target.checked)}
                className="mr-2"
              />
              Alert for anxiety indicators
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localPrefs.alertOnSuicidal}
                onChange={(e) => handleChange('alertOnSuicidal', e.target.checked)}
                className="mr-2"
              />
              Alert for suicidal ideation (always enabled for safety)
              <span className="ml-1 text-xs text-red-600">*Required</span>
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Contact Methods</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localPrefs.notifyByEmail}
                onChange={(e) => handleChange('notifyByEmail', e.target.checked)}
                className="mr-2"
              />
              Email notifications
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localPrefs.notifyBySMS}
                onChange={(e) => handleChange('notifyBySMS', e.target.checked)}
                className="mr-2"
              />
              SMS notifications
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={localPrefs.notifyByApp}
                onChange={(e) => handleChange('notifyByApp', e.target.checked)}
                className="mr-2"
              />
              In-app notifications
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Frequency Settings</h4>
          <div>
            <label className="block mb-1">Minimum hours between alerts</label>
            <select
              value={localPrefs.minHoursBetweenAlerts}
              onChange={(e) => handleChange('minHoursBetweenAlerts', parseInt(e.target.value))}
              className="w-full max-w-xs p-2 border rounded"
            >
              <option value={4}>4 hours</option>
              <option value={8}>8 hours</option>
              <option value={12}>12 hours</option>
              <option value={24}>24 hours</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              *Urgent alerts for severe situations will override this setting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export  {NotificationPreferences};

// src/pages/Dashboard.js

const Dashboard = () => {
  // Mock user data - in a real app this would come from your authentication system
  const [userData] = useState({
    id: "user-123",
    name: "Alex Johnson",
  });
  
  // Emergency contacts state
  const [contacts, setContacts] = useState([
    { id: 1, name: "Sarah Johnson", relationship: "Mother", phone: "555-123-4567", email: "sarah@example.com" },
    { id: 2, name: "Dr. Michael Chen", relationship: "Therapist", phone: "555-987-6543", email: "dr.chen@example.com" }
  ]);
  
  // Notification preferences state
  const [preferences, setPreferences] = useState({
    alertOnDepression: true,
    alertOnAnxiety: true,
    alertOnSuicidal: true,
    notifyByEmail: true,
    notifyBySMS: true,
    notifyByApp: true,
    minHoursBetweenAlerts: 12
  });
  
  // Add a new emergency contact
  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  
  // Remove an emergency contact
  const handleRemoveContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  
  // Update notification preferences
  const handleUpdatePreferences = (newPrefs) => {
    // Always ensure suicidal ideation alerts are enabled for safety
    const updatedPrefs = { ...newPrefs, alertOnSuicidal: true };
    setPreferences(updatedPrefs);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Project HOPE Dashboard</h1>
      <p className="mb-6">
        Welcome back, {userData.name}. The mental health monitoring system is active and ready to provide support.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MentalHealthMonitor
          userId={userData.id}
          emergencyContacts={contacts}
        />
        
        <EmergencyContactManager
          contacts={contacts}
          onAddContact={handleAddContact}
          onRemoveContact={handleRemoveContact}
        />
      </div>
      
      <div className="mt-6">
        <NotificationPreferences
          preferences={preferences}
          onUpdatePreferences={handleUpdatePreferences}
        />
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-medium text-blue-800 mb-2">Resources & Support</h3>
        <p className="text-blue-600 mb-2">
          Remember, this system is designed to supplement, not replace, professional mental health support.
        </p>
        <ul className="list-disc pl-5 text-blue-700">
          <li>National Suicide Prevention Lifeline: 988 or 1-800-273-8255</li>
          <li>Crisis Text Line: Text HOME to 741741</li>
          <li>Contact your healthcare provider for personalized support</li>
        </ul>
      </div>
    </div>
  );
};

export { Dashboard };

// src/App.js


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">Project HOPE</h1>
          <p className="text-blue-100">Mental Health Support & Monitoring System</p>
        </div>
      </header>
      
      <main>
        <Dashboard />
      </main>
      
      <footer className="mt-12 p-4 bg-gray-100 border-t">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          <p>Project HOPE - Mental Health Monitoring System</p>
          <p className="mt-1">This system is designed with privacy and sensitivity in mind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;