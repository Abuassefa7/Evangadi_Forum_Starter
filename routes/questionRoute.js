const express = require('express')
const router =express.Router()
const {askQuestion} =require('../controller/questionController')

// authentication middleware )
// note (authentication middleware is applied to all question routes so  use at app.js)

// const authMiddleware = require('../middleware/authMiddleware')

// router.get("/all-questions",authMiddleware,(req,res)=>{
//     res.send("all questions")
// })

router.get("/all-questions",(req,res)=>{
    res.send("all questions")
})

router.get("/single-question",(req,res)=>{
    res.send("single question")
})

router.post("/ask-question",askQuestion)



module.exports = router