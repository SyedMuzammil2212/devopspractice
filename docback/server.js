require('dotenv').config();
const express = require("express")
const cors = require("cors")


const app = express()


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5025

app.get("/", async (req, res) => {
    res.status(200).json({ message: "Hello mama crazy lala" })
})

app.post("/hello", async (req, res) => {
    const { name } = req.body

    res.status(200).json({ message: `Your name is ${name} carzy` })
})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT} `)
})