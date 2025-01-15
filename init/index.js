const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("connected to DB");
    
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Wandurlust")
};


const initDB = async () => {
    console.log("Deleting existing data...");
    await Listing.deleteMany({});
    console.log("Existing data deleted.");
    
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
   
};


initDB();