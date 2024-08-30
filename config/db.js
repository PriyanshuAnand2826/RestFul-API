const mongoose=require("mongoose");


async function db() {
  await mongoose.connect(process.env.MONGO_URI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports=db;