var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aiswaryaashok2002:aishu@cluster0.ujxhd.mongodb.net/CCSIT?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log("connected")
    })
.catch ((error) => {
    console.log(error)
})