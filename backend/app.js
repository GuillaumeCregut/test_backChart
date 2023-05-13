require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions=require('./config/corsConfig');
const router=require('./routes/index.route');

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use('/assets',express.static('assets'));
app.use('/api', router);
app.get("/", (req, res) => {
    res.sendStatus('hello world');
  });

  app.listen(port, () => {
    console.info(`Server listening on port ${port}`);
  });
  
  module.exports = app;