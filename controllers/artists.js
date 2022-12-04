//(Dependencies)
//--------------------------------------------------
const db = require("../models");
const express = require('express');
const router = express.Router();
//--------------------------------------------------

//(New Route)
router.get("/new", (req, res) => {
    res.render("addArtist", {
        tabTitle: "Ad Artist"
    })
})
//--------

//(Create Route)
router.post("/", (req, res) => {
    db.Artist.create(req.body, (err, artist) => {
        res.redirect("/artist/" + artist._id)
    })
})
//--------

//(Show Route)
router.get("/:id", (req, res) => {
    db.Artist.findById(req.params.id, (err, artist) => {
        res.render("showArtist", {
            artist: artist,
            tabTitle: "Artist:" + artist.name
        })
    })
})
//--------

//(Edit Route)
router.get('/:id/edit', (req, res) => {
    db.Artist.findById(req.params.id, (err, artist) => {
        res.render("editArtist", {
            artist: artist, 
            tabTitle: "Edit Artist"
        })
    })
})
//-------

//(Update Route)
router.put("/:id", (req, res) => {
    db.Artist.findByIdAndUpdate(
        req.params.id, req.body,
        {new: true}, (err, artist) => {
            res.redirect('/artist/' + artist._id)
        }
    )
})
//--------

//(Delete Route)
router.delete('/:id', (req, res) => {
    db.Car.findByIdAndDelete(req.params.id, () => {
        res.redirect('/');
    });
});


module.exports = router