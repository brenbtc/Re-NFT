//(Dependencies)
//--------------------------------------------------
const db = require("../models");
const express = require('express');
const router = express.Router();
//--------------------------------------------------

//(New Route)
router.get("/new", (req, res) => {
    res.render("newNFT", {
        tabTitle: "Add NFT"
    })
})
//--------

//(Create Route)
router.post("/", (req, res) => {
    db.Nft.create(req.body, (err, nft) => {
        res.redirect("/nft/" + nft._id)
    })
})
//--------

//(Show Route)
router.get("/:id", (req, res) => {
    db.Nft.findById(req.params.id, (err, nft) => {
        res.render("showNFT", {
            nft: nft,
            tabTitle: "NFT:" + nft.name
        })
    })
})
//--------

//(Edit Route)
router.get('/:id/edit', (req, res) => {
    db.Nft.findById(req.params.id, (err, nft) => {
        res.render("editNFT", {
            nft: nft, 
            tabTitle: "Edit NFT"
        })
    })
})
//-------

//(Update Route)
router.put("/:id", (req, res) => {
    db.Nft.findByIdAndUpdate(
        req.params.id, req.body,
        {new: true}, (err, nft) => {
            res.redirect('/nft/' + nft._id)
        }
    )
})
//--------

//(Delete Route)
router.delete('/:id', (req, res) => {
    db.Nft.findByIdAndDelete(req.params.id, () => {
        res.redirect('/');
    });
});

module.exports = router

