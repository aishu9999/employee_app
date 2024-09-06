// 1.importing express
const express = require('express')
require("./connection")
var EmployeeModel = require("./model/employee")
var cors = require('cors')

// 2.initilazation
const app = new express()


// mid
app.use(express.json())
app.use(cors())

// 3.api creation
app.get('/', (req, res) => {
    res.send("msg from the server")
})
app.get('/hi', (req, res) => {
    res.send("hlo namaskaram")
})
// add api
// add
app.post("/add", async (req, res) => {
    try {
        await EmployeeModel(req.body).save();
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)
    }
})
// view
app.get("/view", async (req, res) => {
    try {
        var show = await EmployeeModel.find()
        res.send(show)
    } catch (error) {
        console.log(error)
    }
})
// remove
app.delete("/remove/:id", async(req, res )=> {
    try {
        await EmployeeModel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted" })

    } catch (error) {
        console.log(error)
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        await EmployeeModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("updated" )

    } catch (error) {
        console.log(error)
    }
})


// 4.port
app.listen(3004, () => {
    console.log("port is running");
})

