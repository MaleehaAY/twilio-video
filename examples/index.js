const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.insights.v1.rooms('RM5b116cc0d0d765cfde0947303c81632c')
                  .fetch()
                  .then(room => console.log(room));
