const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
const {config} = require('dotenv')
const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(cors())
config("./.env")

//Routers
app.use("/auth", authRoutes)
app.use("/task", taskRoutes)

//PORT AND HOSTNAME
const PORT = process.env.PORT
const hostname = process.env.hostname
// console.log(process.env);

//listen method
app.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`);
    connectDB()
})