const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT | 3000

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.get('*',(req, res) => {
      res.sendFile(path.join(publicPath, 'index.html'));
  })

  app.listen(PORT, function() {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
  });