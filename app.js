const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const mongoose = require('mongoose');

app.use(cookieParser());
const allowedOrigins = ["http://localhost:5173", "https://66330f787d8336631139d715--scintillating-peony-3c6b03.netlify.app/"];
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is allowed or if it's a null (server-to-server request)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // Add other CORS options here if needed
}));
//app.options('*', cors());

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Unauthorized request' });
  } else if (err.name === 'CorsError') {
    res.status(403).json({ error: 'CORS request blocked' });
  } else {
    next(err);
  }
});

app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

mongoose.set('strictQuery', false);

app.use(bodyParser.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

const appRouter = require('./src/Routes/api');
app.use('/api', appRouter);

app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

let URI =
  'mongodb+srv://mobinulislam:8NWFTTL3vZqC2W0L@cluster0.mskd8ua.mongodb.net/fullStackEcom';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log(`Mongoose is connected`);
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.static('client/dist'));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

module.exports = app;
