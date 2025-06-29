const express = require('express');
const app = express();
const port = 5000;

// CORS enable if frontend on different port
const cors = require('cors');
app.use(cors());

app.get('/api', (req, res) => {
<<<<<<< HEAD
  res.send('helm is deployed by using the Argocd is main CD for the purpose use for another one');
=======
  res.send('Argocd is the CI/CD toll for the deployment');
>>>>>>> 8fcd87fc35a0e6ce73883187949507b0fdff6737
});

app.listen(port, () => {
  console.log(`🚀 Backend server is running at http://localhost:${port}`);
});

