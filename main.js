const subscriber = require("./models/subscriber");

const express=require("express"), //require express
      app=express(), //initiate express application
      homeController=require("./controllers/homeController"),
      errorController=require("./controllers/errorController"),
      layouts=require("express-ejs-layouts"), //Require express-ejs-layouts
      mongoose= require("mongoose"), 
      Subscriber=require("./models/subscriber");
      subscribersController=require("./controllers/subscribersController");
      
//mongoose.Promise(global.Promise);
mongoose.connect(
    "mongodb://localhost:27017/recipe_db", //set up connection to the database
    {useNewUrlParser: true});
const db= mongoose.connection; //assign the database to the db variable
db.once("open",()=>{
    console.log('Succesfully connected to MongoDB using mongoose');
}); //Log a message when the app connects to database
//db.subscriber.remove()

/*var subscriber1= new Subscriber({
    name:"Jon Wexler",
    email: "jon@jonwexler.com"
}).save().then(
        (error,savedDocument)=>{
            if (error) console.log(error);
        }
    );
var subscriber2= new Subscriber({
    name:"Chef Eggplant",
    email: "eggplant@recipeapp.com"
}).save().then(
        (error,savedDocument)=>{
            if (error) console.log(error);
        }
    );
var subscriber3= new Subscriber({
    name:"Professor Souffle",
    email: "souffle@recipeapp.com"
}).save().then(
        (error,savedDocument)=>{
            if (error) console.log(error);
        }
    );
*/

app.set("view engine","ejs"); //Set the app to use ejs
app.use(express.static("public"));
app.set("port",process.env.PORT || 3000);
app.use(express.urlencoded({
    extended:false
})); //Tell express.js to use body-parser 
app.use(express.json());
app.use(layouts); //Set the app to use the layout module

app.get("/",(req,res)=>{
    res.render("index");//route for home page
});
app.get("/courses",homeController.showCourses);
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.post("/contact",homeController.postedSignUpForm);
app.post("/subscribe",subscribersController.saveSubscriber);
app.get("/subscribers",subscribersController.getAllSubscribers,
(req,res,next)=>{
    res.render("subscribers",{subscribers: req.data})
}
);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

//  Create new subscriber




//Querying


/*
Subscriber.findOne({name: "Jon Wexler" })
   .where("email",/wexler/)
   .exec()
   .then((data)=>{
       console.log(data.name);
   })
   .catch((error)=>{
       console.log(error);
});
*/

app.listen(app.get("port"),()=>{   //Listen on port 3000
    console.log(`Server Running at http://localhost:${app.get("port")}`
    );
});



