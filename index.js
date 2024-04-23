import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    fs.readFile("./test-public/index.html", (err, data) => {
        if(err){
            res.send(404).json({error: "File not found"});
        }
        
        res.end(data);
    })
})

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    })
})
.catch((err) => {
    console.error(`Didn't connect to server due to: ${err}`);
})