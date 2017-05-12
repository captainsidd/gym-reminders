# gym-reminders

Originally, a server that sent an SMS alert to me reminding me to go to the gym.

Now, it's (going to be) a fully fledged reminder system. Pretty simple stuff, but let's me play with Twilio and learn ES6/Typescript.

## How It Works

Ok, so I need reminders to do simple things, and I have this bad habit of brushing off calendar alerts and moving things forward on my Todo list. Maybe text message alerts to do a job will get me off my butt? Banking on years of positive feedback when I see text messages to help me achieve this.

Basically, I text the system when I need to be reminded about something. It asks further questions, like when I want to be reminded, what the reminder message needs to say, until it has enough information to create a job in its queue. When the appropriate time comes around, the system reminds me to do something.

## Installation

1) Get appropriate tokens and secrets. Ask Sid nicely if you wanna contribute.

2) Install your packages

```$ npm install```

3) Depending on if you're doing this in production or not:

```$ node script.js``` OR ```$ pm2 script.js```
