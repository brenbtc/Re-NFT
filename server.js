//(Dependencies)
//--------------------------------------------------
const express = require("express")
const router = express.Router();
const app = express()
const methodOverride = require("method-override")
require("dotenv").config()
// Access Models
const db = require("./models")
// Controllers
const nftCtrl = require("./controllers/nfts")
const artistCtrl = require("./controllers/artists")
//---------------------------------------------------





//(Middleware)
//---------------------------------------------------
app.use(express.static("public"));
app.set("view engine" , "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
//---------------------------------------------------





//(Routes)
//---------------------------------------------------
app.get('/', (req, res) => {
    db.Nft.find({}, (err, nfts) => {
        db.Artist.find({},( err, artists) => {
            res.render("index", {
                nfts: nfts,
                artists: artists, 
                tabTitle: "Home"
            })
        })
    })
})

router.get('/about', (req, res) => {
    res.render("about", {title: "About"})
});


app.use("/nft", nftCtrl)
app.use("/artist", artistCtrl)





//(Listeners)
//---------------------------------------------------
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})