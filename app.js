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

const exclamArray = [
  "oh helllll no",
  "HELL no",
  "I KNOW u aint talkin about me",
  "save ur trash",
  "LOLOLOLOL",
  "OH ive HAD it with uur shit",
  "fjck you",
  "fuck you",
  "fyck you",
  "Oh i dont BELIEVE this",
  "WOW REALLLY",
  "Say that to my face",
  "👏👏👏👏👏",
  "GUESS WHAT",
  "helllll no",
  "Save your shit",
  "Go to hell",
  "NOT LISTENING",
  "Stuff your shit",
  "OH WHATS THAT",
  "WOW",
  "REAL NICE",
]

const sentenceArray = [
  "I KNOW youve been talking behind my back",
  "last time i cared what you had to say was NEVER",
  "almost didnt reply to this cause im busy FUCKING",
  "if i wanted to hear your shit, id put my ASS IN THE TOILET",
  "GUESS whos coming to my birhtday this year, NOT YOU",
  "GUESS who just got themselves BLOCKED ON FACEBOOK",
  "got a NEWSFLASH for you, YOURE A WHORE",
  "ur just made you aint got lips like these",
  "I wasnt gonna say it but you peaked a LONNNNG time ago",
  "thats not what you said when YOU called ME crying last Saturday",
  "im callin ron to come drop your ass",
  "you look like a slut when you wear makeup",
  "u WISH people looked at your ass",
  "im gonna cut you",
  "I wasnt gonna say it, but I KNOW youve been stealin my pills",
  "for a second i thought i liked you. THEN I WOKE UP",
  "coming from the person who never paid me back for cigarettes. CLASSY",
  "Cherry OUT",
  "ur just mad no one follows ur RINSTA",
  "ur LUCKY im on house arrest right now",
  "im blockin ur TRASH on facebook",
  "i dont have time for this, im shakin it tonight",
  "dont call me no more, phone is IN THE TRASH",
  "ill straight firebomb your house, TELL ME I WONT",
  "dont call me no more, your number is BLOCKED",
  "at least im not the one sleeping with my boss",
  "thats not what you said when you BEGGED me for a handy",
  "wasnt gonna say it, but everyone knows you got work done, and it looks BAD",
  "everyone on here knows u cry on the way to work, sorry not sorry",
  "Im not the one who blew the bouncer to get into Dirty Bar, wasnt gonna say it 🤷",
  "u just unvited urself from my birthday. HAVE FUN",
  "got a newsflash for you. GET A LIFE",
  "dont bother calling next time you need rons truck, good luck BUYING YOUR OWN",
  "coming from the person who ACTUALLY USES CONDOMS",
  "why dont you tell everyone about the time you went to the doctor for gono, OOPS",
  "i dont need this, ive got rons DICK waiting for me at home",
  "i dont have time for you, ive got DICKS LINED UP out the door",
  "i saw you at duccinis without me btw. Oh and you looked like a SLUT",
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

  if (exclamWord == "OH WHATS THAT" ||
      exclamWord == "NOT LISTENING" ||
      exclamWord == "WOW" ||
      exclamWord == "GUESS WHAT" ||
      exclamWord == "WOW REALLLY!") {
    userName = userName.toUpperCase();
  }

  //remember to add return here
  res.status(200).json(`${exclamWord} ${userName}, ${sentenceWord}` );
})

app.post('/cherry', (req,res, next) => {
  let exclamNumber = getRandomInt(exclamArray.length)
  let exclamWord = exclamArray[exclamNumber]

  let sentenceNumber = getRandomInt(sentenceArray.length)
  let sentenceWord = sentenceArray[sentenceNumber]

  let userName = req.body.user_name;

  if (userName == "jacipulice") {
    userName = "jaci"
  }

  if (userName == "kaelansullivan") {
    userName = "kaelan"
  }

  if (userName == "ryankrull") {
    userName = "ryan"
  }

  if (userName == "mksymes") {
    userName = "kate"
  }

  if (userName == "M.C.") {
    userName = "marky"
  }

  if (userName == "doodyman") {
    userName = "doody"
  }

  if (exclamWord == "OH WHATS THAT" ||
      exclamWord == "NOT LISTENING" ||
      exclamWord == "WOW" ||
      exclamWord == "REAL NICE" ||
      exclamWord == "GUESS WHAT" ||
      exclamWord == "WOW REALLLY") {
    userName = userName.toUpperCase();
  }

  let botPayload = {
    text: `${exclamWord} ${userName}, ${sentenceWord}`
  }

  return res.status(200).json(botPayload);
})
