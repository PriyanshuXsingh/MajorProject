const express = require("express");
const router = express.Router({mergeParams:true});
const wrapasync = require("../utils/wrapasync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewcreatedBy} = require("../middlewayer.js");

const reviewController = require("../controllers/reviews.js");


//Review 
// Post Review route
router.post("/",isLoggedIn, validateReview,wrapasync(reviewController.createreview));
 
 //Delete Review Route
 router.delete("/:reviewId", isLoggedIn,isReviewcreatedBy, wrapasync(reviewController.delete));

 module.exports = router;