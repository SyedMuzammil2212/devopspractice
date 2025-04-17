const express = require("express")

const app = express()

const PORT = 5020

app.post("/add", (req, res) => {
    const { a, b } = req.body

    res.status(200).json({ message: `The addition of two numbers is ${a + b}` })

})

app.listen(PORT, (() => {
    console.log(`Server is running in PORT:${PORT}`)
}))