const mongoose=require("mongoose"),
      Subscriber=require("./models/subscriber");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db"
    { useNewUrlParser: true}
);
mongoose.connection

Subscriber.deleteMany()
          .exec()
          .then(()=>{
            console.log("Subscriber data is empty!")
          });