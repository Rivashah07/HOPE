const express = require("express");
const router = express.Router();

// Sample data to simulate alerts
let notifications = [];

router.post("/send", (req, res) => {
    const { message, recipient } = req.body;
    if (!message || !recipient) {
        return res.status(400).json({ error: "Message and recipient are required" });
    }

    const newNotification = {
        id: notifications.length + 1,
        message,
        recipient,
        timestamp: new Date(),
    };

    notifications.push(newNotification);
    res.status(201).json({ success: true, notification: newNotification });
});

router.get("/", (req, res) => {
    res.json(notifications);
});

module.exports = router;
