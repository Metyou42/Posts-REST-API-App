require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const routers = require('./router');

const app = express();

app.use(express.json());
app.use(fileupload({}));
app.use('/api', routers);

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    app.listen(process.env.PORT, async () => {
      console.log(`Server is running on port ${PORT}:`);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
