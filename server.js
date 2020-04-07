var MONGODB_URL = process.env.MONGODB_URL || "mongodb://Phatty:Password22!@ds059207.mlab.com:59207/heroku_63q0wsc9";

mongoose.connect(MONGODB_URL);