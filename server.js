const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
