const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/initiate-auth', async (req, res) => {
  try {
    const response = await axios.post('https://bankid.example.com/api/auth', {
      // BankID initiation payload
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'BankID initiation failed' });
  }
});

app.post('/collect-auth', async (req, res) => {
  try {
    const response = await axios.post('https://bankid.example.com/api/collect', {
      // BankID collect payload
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'BankID collection failed' });
  }
});

app.post('/create-account', (req, res) => {
  // Account creation logic
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
