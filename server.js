var MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URL);