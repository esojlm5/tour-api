const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

// middleware functions
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// for now only works tour routes
app.use('/api/v1/tours', tourRouter);
// Need read file users in userController
// app.use('/api/v1/users', userRouter);

const port = 3000;

// start server
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
