
const express = require("express")
const app = express()
const router = require("./routes/route")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/", router)




app.listen(3001, () => console.log("listen in port: 3001"))










