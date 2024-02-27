const mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
mongoose.connection;

var contacts = [
  {
    name: "Jon Wexler",
    email: "jon@jonwexler.com",
    zipCode: 10016
  },
  {
    name: "Chef Eggplant",
    email: "eggplant@recipeapp.com",
    zipCode: 20331
  },
  {
    name: "Professor Souffle",
    email: "souffle@recipeapp.com",
    zipCode: 19103
  }
];

const commands= async()=>{
    await Subscriber.deleteMany({});
    await Subscriber.insertMany(contacts);
}

commands().then(
    ()=>{

        mongoose.connection.close();

    }
);


/*Promise.all(commands)
.then(
    (r)=>{
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    }
)
.catch((error)=>{

    console.log(`ERROR: ${error}`);

});

/*commands().then(()=>{
    mongoose.connection.close();
});*/
/*Subscriber.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber data is empty!");
  });

var commands = [];

contacts.forEach(c => {
    commands.push(
      Subscriber.insert({
        name: c.name,
        email: c.email
      })
    );
});
*/