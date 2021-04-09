const mongoose = require(mongoose);
const config = require("config");
const dbConfig = config.get("mongo");
mongoose.connect('mongodb://localhost/lala',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
