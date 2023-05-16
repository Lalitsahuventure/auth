require("dotenv").config();
const express = require('express');
const connectDatabase = require("./config/dbConnection");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000
const userRoute = require('./routes/userRoutes')
const cors = require('cors')

app.use(cors())
connectDatabase() //Initiate MongoServer



app.use("/auth", userRoute)





app.listen(PORT, () => console.log(`Server started at port ${PORT}`));