const express = require('express');
const app = express();
const port = 5000;

// CORS enable if frontend on different port
const cors = require('cors');
app.use(cors());

app.get('/api', (req, res) => {

  res.send('helm is deployed by using the Argocd is main CD for the purpose use for another one');

});

app.listen(port, () => {
  console.log(`🚀 Backend server is running at http://localhost:${port}`);
});

