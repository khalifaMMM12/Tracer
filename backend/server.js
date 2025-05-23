const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

app.post('/api/subscribe', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    let emailExists = false;

    try {
      await axios.get(`https://api.brevo.com/v3/contacts/${email}`, {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      });

      emailExists = true;
    } catch (err) {
      if (err.response?.status !== 404) {
        console.error('Error checking existing contact:', err.response?.data || err.message);
        return res.status(500).json({ message: 'Error checking existing contact' });
      }
    }

    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    let phoneExists = false;

    try {
      const phoneResponse = await axios.get(`https://api.brevo.com/v3/contacts?sms=${phone}`, {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      });
      if (phoneResponse.data?.contacts?.length > 0) {
        phoneExists = phoneResponse.data.contacts.some(
          (contact) => contact.attributes && contact.attributes.SMS === phone
        );
      }
    } catch (err) {
      if (err.response?.status !== 404) {
        console.error('Error checking existing phone number:', err.response?.data || err.message);
        return res.status(500).json({ message: 'Error checking existing phone number' });
      }
    }

    if (phoneExists) {
      return res.status(400).json({ message: 'Phone number already exists' });
    }

    // Add new contact
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        attributes: {
          NAME: name,
          SMS: phone,
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
      return res.status(201).json({ message: 'Contact added successfully' });
    } else {
      return res.status(response.status).json({ message: 'Failed to add contact' });
    }
  } catch (error) {
    console.error('Error adding contact to Brevo:', error.response?.data || error.message || error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});