var twilio = require('twilio');

var ACCOUNTSID = 'AC336b5f57436f64eedc1b44237059804e';
var AUTHTOKEN = '3b8322ecf21c30e363f9becb91da74ea';

var client = twilio(ACCOUNTSID, AUTHTOKEN);
var cronJob = require('cron').CronJob;


var SMSdata = {
  to:'+15854891908',
  from: '+15852854240',
  body: 'DO YOU WANNA BE AWESOME? HIT THE GYM, FOOL.'
};

var textJob = new cronJob( '45 5 * * 1,3,5', function(){
  client.sendMessage(SMSdata, function(err, responseData) {
      if (err) {
        console.log(err);
      }
      if (!err){
        console.log('Message sent!');
      }
  });
},  null, true);
