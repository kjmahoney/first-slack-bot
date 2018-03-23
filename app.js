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

//first one says, hell no i know you aint talking behind my back"
//
const exclamArray = [
  "Oh helllll no",
  "That best not be my name I see",
  "Save your trash",
  "LOLOLOLOL",
  "OH ive HAD it with your shit",
  "fjck you",
  "fuck you",
  "Oh i dont BELIEVE this",
  "Wow REALLLY!",
  ""
]

const sentenceArray = [
  "I KNOW youve been talking behind my back",
  "haters gonna hate",
  "ur just made you aint got these lips",
  "I wasnt gonna say it but you peaked a LONNNNG time ago",
  "thats not what you said when you called me crying last Saturday",
  "im callin ron to come drop your ass",
  "you look like a slut when you wear makeup",
  "ur just mad no one looks at your ass",
  "im gonna cut you",
  "I wasnt gonna say it, but I KNOW youve been stealin my meds",
  "for a second i thought i liked you",
  "I wasnt gonna say it but you owe me cigarettes",
  "Cherry OUT",
  "ur just mad no one follows ur RINSTA",
  "ur LUCKY im on house arrest right now",
  "im blockin ur TRASH on facebook",
  "i dont have time for this, im shakin it tonight",
  "dont call me no more",
  "ill firebomb your house, dont think i wont",
  "GUESS WHAT?! Im BLOCKING your number",
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}
//for testing
app.get('/cherry', (req,res, next) => {
  let exclamNumber = getRandomInt(exclamArray.length)
  let exclamWord = exclamArray[exclamNumber]

  let sentenceNumber = getRandomInt(sentenceArray.length)
  let sentenceWord = sentenceArray[sentenceNumber]

  let userName = "kevin"

  //remember to add return here
  res.status(200).json(`${exclamWord} ${userName}, ${sentenceWord}` );
})

app.post('/cherry', (req,res, next) => {
  let exclamNumber = getRandomInt(exclamArray.length)
  let exclamWord = exclamArray[exclamNumber]

  let sentenceNumber = getRandomInt(sentenceArray.length)
  let sentenceWord = sentenceArray[sentenceNumber]

  let userName = req.body.user_name;

  let botPayload = {
    text: `${exclamWord} ${userName}, ${sentenceWord}`
  }

  return res.status(200).json(botPayload);
})
