const express = require("express");
const router = express.Router();
const Message = require("./models/Message");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log("Saved message:", newMessage);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
