const express = require('express');

const app = express();
const port = 3000;


const apiRouter = express.Router();
app.use('/api', apiRouter);

// Adding routes to the router
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const auth = require('./routes/auth');

apiRouter.use('/users', userRoutes);
apiRouter.use('/admin', adminRoutes);
apiRouter.use('/auth', auth);

// App 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
