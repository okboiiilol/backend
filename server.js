const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/session', (req, res) => {
  const { accessToken, uuid, username } = req.body;
  console.log('Modtaget session:', { accessToken, uuid, username });
  res.status(200).json({ message: 'Modtaget!' });
});

app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});
