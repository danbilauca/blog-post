# MongoDB and Express.js REST API sample application

This repository contains the sample application for the [MongoDB and Express.js REST API tutorial](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial).

## How To Run

1. Clone the repository
2. in `/server` add a `.env` file with the following content:
```
MONGO_USER=mongouser
MONGO_PASS=mongopassword
MONGO_HOST=mongohost
MONGO_PORT=27017
```
3. In `/app` add a `.env` file with the following content:
```
REACT_APP_API_URL=http://localhost:5050
```

This would be the URL where the React app will hit in order to communicate with the Express server.

4Start the Express server:
```
cd server
npm install
npm run start
```

4. Start the React app (in a new terminal window):
```
cd app
npm install
npm start
```

## Disclaimer

Use at your own risk; not a supported MongoDB product
