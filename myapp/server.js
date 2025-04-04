const express = require("express");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const notificationsRoutes = require("./server/notifications");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Allow React app to access API

const usersFile = "users.json";

// Load users from file
const loadUsers = () => {
    try {
        if (!fs.existsSync(usersFile)) return [];
        const data = fs.readFileSync(usersFile, "utf8");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error loading users:", error);
        return [];
    }
};

// Save users to file
const saveUsers = (users) => {
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf8");
    } catch (error) {
        console.error("Error saving users:", error);
    }
};

// Signup Route
app.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;
    let users = loadUsers();

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: "Email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const newUser = { id: Date.now(), fullName, email, password: hashedPassword };
    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: "Signup successful!" });
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let users = loadUsers();

    const user = users.find(user => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials!" });
    }

    res.status(200).json({ message: "Login successful!", user });
});

// Notification Routes
app.use("/api/notifications", notificationsRoutes);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
 