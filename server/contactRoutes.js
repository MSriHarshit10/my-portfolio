const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form submitted:", { name, email, message });

  // In real-world app: Save to DB or send email
  res.status(200).json({ success: true });
});

module.exports = router;
