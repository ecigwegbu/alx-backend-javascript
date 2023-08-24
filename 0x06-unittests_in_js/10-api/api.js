// Create a small HTTP server using Express

const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.end(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  responseObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(responseObject);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  if (!username) {
    return res.status(400).json({ error: 'UserName is required' });
  }
  res.json(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
