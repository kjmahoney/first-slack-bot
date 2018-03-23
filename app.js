const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
})

app.listen(port, () => {
  console.log('listening on port' + port);
})

app.post('/hello', (req,res, next) => {
  let userName = req.body.user_name;
  userName = userName.charAt(0).toUpperCase() + userName.slice(1);
  let botPayload = {
    text: 'Helloooooo ' +userName
  }
  if (userName !== 'Slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
})
