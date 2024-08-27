const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/initiate-auth', async (req, res) => {
  const { personalNumber } = req.body;
  try {
    const response = await axios.post('https://bankid.example.com/api/auth', {
      personalNumber: personalNumber,  // Replace with the actual expected payload for BankID initiation
      // Add any other necessary fields here
    });
    res.json(response.data);
  } catch (error) {
    console.error('BankID initiation error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'BankID initiation failed', details: error.response ? error.response.data : error.message });
  }
});

app.post('/collect-auth', async (req, res) => {
  const { orderRef } = req.body;  // Assuming the collect API requires an order reference
  try {
    const response = await axios.post('https://bankid.example.com/api/collect', {
      orderRef: orderRef,  // Replace with the actual expected payload for BankID collection
      // Add any other necessary fields here
    });
    res.json(response.data);
  } catch (error) {
    console.error('BankID collection error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'BankID collection failed', details: error.response ? error.response.data : error.message });
  }
});

app.post('/create-account', (req, res) => {
  // Implement account creation logic here
  res.json({ success: true, message: 'Account created successfully' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
