const dotenv = require('dotenv')
// const express = require('express')
const connectDB = require('./db/index.js')
// const app = express()
const {app} = require('./app.js');


dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`)
    });
})
.catch((err) => {
    console.log('MONGO DB connection failed ', err)
})


// const {DB_NAME} = require('./constants')
// const mongoose = require('mongoose');
// ;(async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })()


app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    res.json({name: 'kundan'})
})

// app.listen(process.env.PORT, () =>{
//     console.log(`Server started on port: ${process.env.PORT}`)
// })