const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
const data = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  gender:{
    type:String
  },
  email: {
    type: String,
  },
  hobby:{
    type:String
  },
  address:{
    type:String
  }
  
});
// const demo1 = new mongoose.model("agular_demo", data);
// module.exports = demo1;


autoIncrement.initialize(mongoose.connection);
data.plugin(autoIncrement.plugin, {
  model: "agular_demo",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
const demo1 = mongoose.model("agular_demo", data);
module.exports = demo1;