// connection of mongoDB database

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://amanverma:mahadev@cluster0.k7k9mnt.mongodb.net/auth-apps?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    }
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

// const db= mongoose.connection;
// db.on("error", console.error.bind(console,"Error in connection to Mongodb"));

// db.once("open", function(){
//     console.log("Successfully connected to Database :: Mon goDB");

// });

// module.exports =db;
