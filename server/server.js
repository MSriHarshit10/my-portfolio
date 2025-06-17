const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const contactRoutes = require("./contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client")));

// Routes
app.use("/contact", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
