const express = require('express');

const app = express();
const port = 3000;


const apiRouter = express.Router();
app.use('/api', apiRouter);

const userRoutes = require('./routes/userRoutes');

apiRouter.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
