const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/api/subscribe', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    // Check if email already exists
    const checkResponse = await axios.get(
      `https://api.brevo.com/v3/contacts/${email}`,
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    if (checkResponse.status === 200) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        attributes: {
          NAME: name,
          PHONE: phone,
        },
        listIds: [3],
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    
    if (response.status === 201) {
      res.status(201).json({ message: 'Contact added successfully' });
    } else {
      res.status(response.status).json({ message: 'Failed to add contact' });
    }
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    // console.log('Using Brevo API Key:', process.env.BREVO_API_KEY);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});