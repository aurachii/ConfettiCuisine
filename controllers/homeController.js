var courses=[
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10

    }
    
]; //Array of courses

exports.showCourses=(req,res)=>{
    res.render("courses");
};  //Callback function for courses

exports.showSignUp=(req,res)=>{
    res.render("contact");
}; // Callback function for contact page

exports.postedSignUpForm=(req,res)=>{
    res.render("Thanks");
};

exports.showCourses=(req,res)=>{
    res.render("courses", {
        offeredCourses: courses
    });
};