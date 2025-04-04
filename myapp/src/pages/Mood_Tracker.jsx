import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const MoodTracker = () => {
  const [mood, setMood] = useState(5);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState([]);

  const moodEmojis = ["😞", "😟", "😐", "🙂", "😊", "😃", "😁", "😍", "🥳", "😇"];

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const handleSave = () => {
    const formattedDate = date.toISOString().split("T")[0];
    const newEntry = { date: formattedDate, mood, notes };

    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));

    setNotes("");
  };

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h2 style={styles.sectionTitle}>📅 Mood Calendar</h2>
        <Calendar onChange={setDate} value={date} />
        <div style={styles.historyBox}>
          <h3 style={styles.historyTitle}>Mood History</h3>
          {history.length > 0 ? (
            history.map((entry, index) => (
              <div key={index} style={styles.historyItem}>
                <strong>{entry.date}</strong>
                <p>Mood: {moodEmojis[entry.mood - 1]} {entry.mood}/10</p>
                <p>📝 {entry.notes}</p>
                <button onClick={() => handleDelete(index)} style={styles.deleteButton}>❌ Delete</button>
              </div>
            ))
          ) : (
            <p>No history found</p>
          )}
        </div>
      </div>

    
      <div style={styles.rightPanel}>
        <h2 style={styles.heading}>How are you feeling today?</h2>
        <div style={styles.emojiContainer}>
          {moodEmojis.map((emoji, index) => (
            <span
              key={index}
              style={{
                fontSize: mood === index + 1 ? "2rem" : "1.5rem",
                cursor: "pointer",
                margin: "5px",
                opacity: mood === index + 1 ? 1 : 0.5,
              }}
              onClick={() => setMood(index + 1)}
            >
              {emoji}
            </span>
          ))}
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Would you like to share more about your feelings?"
          style={styles.textarea}
        />
        <button onClick={handleSave} style={styles.button}>Save</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "auto",
    padding: "20px",
    gap: "20px",
  },
  leftPanel: {
    flex: 1,
    background: "#f4f4ff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.2)",
  },
  rightPanel: {
    flex: 2,
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.2)",
  },
  sectionTitle: {
    color: "#6A0DAD",
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#6A0DAD",
    textAlign: "center",
  },
  emojiContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "10px 0",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    marginTop: "10px",
    padding: "12px",
    background: "#6A0DAD",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  historyBox: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  historyTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: "10px",
  },
  historyItem: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
  },
  deleteButton: {
    marginTop: "5px",
    padding: "5px 10px",
    background: "#ff4d4d",
    color: "white",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default MoodTracker;
