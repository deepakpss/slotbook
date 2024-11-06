const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const fakeUser = {
  username: 'user123',
  password: 'password123',
  token: 'fake-jwt-token'
};

// Mock login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === fakeUser.username && password === fakeUser.password) {
    res.json({ token: fakeUser.token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
