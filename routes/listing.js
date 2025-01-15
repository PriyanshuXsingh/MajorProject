const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const {isLoggedIn,isOwner,validateListing} = require("../middlewayer.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const{storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//index Route
router.get("/",wrapasync(listingController.index));
    
    //new route
router.get("/new",isLoggedIn,listingController.rendernewForm);
    
    //show Route
router.get("/:id",wrapasync(listingController.showListing));
    
    //Create Route
router.post("/", isLoggedIn,upload.single('listing[image]'),validateListing,wrapasync(listingController.createListing));

    //edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapasync(listingController.editListing));
    
    //update Route
router.put("/:id",isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapasync(listingController.updateListing));
    
    //Delete Route
router.delete("/:id",isLoggedIn,isOwner,wrapasync(listingController.deleteListing));
    
module.exports = router;