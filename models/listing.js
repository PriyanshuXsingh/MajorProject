const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: { // Corrected from "titile"
    type: String,
    required: true, // Corrected from "requred"
  },
  description: {
    type: String,
    required: true, // Corrected from "requred"
  },
  image: {
    url:String,
    filename:String,
  },
  price: {
    type: Number,
    required: true, // Corrected from "requred"
  },
  location: { // Corrected from "loocation"
    type: String,
    required: true, // Corrected from "requred"
  },
  country: {
    type: String,
    required: true, // Corrected from "requred"
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",

    },
  ],
  owner : {
    type: Schema.Types.ObjectId,
    ref:"User",
  }


} ); 

listingSchema.post("findOneAndDelete", async(listing)=>{
if(listing){
  await Review.deleteMany({_id:{$in: listing.reviews}});
}
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
