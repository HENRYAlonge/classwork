const express = require("express")
const port = 3000
const app = express()
const stud = require("./studscore")

app.get("/allstudents",stud)


app.listen(port,()=>(console.log("My app is running on port 3000")))