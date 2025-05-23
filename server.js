const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/dbConnection');

const auth = require("./routes/auth.js");
const list = require("./routes/list.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// API routes
app.use("/api", auth);
app.use("/api", list);




// Connect DB and start server
connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
