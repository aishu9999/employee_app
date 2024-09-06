var mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Sal:String
})
var EmployeeModel = mongoose.model("employee", schema);
module.exports= EmployeeModel;