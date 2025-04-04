import { useState } from "react";

const Community = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([
    {
      title: "🌿 Managing Anxiety",
      content: "Practice mindfulness and breathing exercises to stay calm.",
    },
    {
      title: "💡 Overcoming Negative Thoughts",
      content: "Challenge negative self-talk with positive affirmations.",
    },
    {
      title: "🌞 Daily Self-Care Tips",
      content: "Start your day with gratitude and small, joyful activities.",
    },
  ]);

  const handlePost = () => {
    if (!title.trim() || !post.trim()) return;
    setPosts([{ title: `📝 ${title}`, content: post }, ...posts]);
    setTitle("");
    setPost("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h2 style={styles.sectionTitle}>🌟 Community Articles</h2>
        {posts.map((article, index) => (
          <div key={index} style={styles.article}>
            <h3 style={styles.articleTitle}>{article.title}</h3>
            <p style={styles.articleContent}>{article.content}</p>
          </div>
        ))}
      </div>
      <div style={styles.rightPanel}>
        <h2 style={styles.sectionTitle}>💬 Share Your Thoughts</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title..."
          style={styles.input}
        />
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write something uplifting or seek support..."
          style={styles.textarea}
        />
        <button onClick={handlePost} style={styles.button}>Post Anonymously</button>
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
    flex: 2,
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.2)",
    borderLeft: "5px solid #6A0DAD",
  },
  rightPanel: {
    flex: 1,
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(106, 13, 173, 0.2)",
    borderLeft: "5px solid #6A0DAD",
  },
  sectionTitle: {
    color: "#6A0DAD",
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  article: {
    padding: "15px",
    borderBottom: "2px dashed #ddd",
    marginBottom: "10px",
  },
  articleTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
  },
  articleContent: {
    fontSize: "16px",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "none",
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
};

export default Community;
