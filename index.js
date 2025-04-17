require('dotenv').config();

// express
const express = require('express');
const app = express();

// line bot
const line = require('@line/bot-sdk');

// config line SDK client from env variables
const config = {
	channelSecret: process.env.CHANNEL_SECRET,
};
// create LINE SDK client
const client = new line.messagingApi.MessagingApiClient({
	channelID: process.env.CHANNEL_ID
  });
  


app.get('/', (req, res) => {
	res.send('GET request to the homepage');
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
// console.log(process.env.channelID);