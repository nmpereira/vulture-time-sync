# vulture-time-sync

## Instructions:

1. Clone `https://github.com/nmpereira/vulture-time-sync`
1. Install `node` and run `npm install`
1. Create an account in https://www.mongodb.com/ and create a collection, ensure network access from `0.0.0.0/0`
1. Copy the connection url from MongoDB to your local directory in a `.env` file. Name the variable `dbURI_time=<mongodb+srv://connection url>`
1. For Developement, run `npm run devstart` in the root directory. (the express app will serve the .ejs frontend)
1. For Production, run `npm start` in the root directory. (the express app will serve the .ejs frontend)
