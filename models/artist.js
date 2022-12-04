//(Dependencies)
//--------------------------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema (
    {
        rank: {type: String},
        name: {type: String, required: true},
        creations: {type: String, required: true},
        ownedNFT: {type: Number, required: true},
        liked: {type: Number},
        about: {type: String, required: true}

    }
)


const Artist = mongoose.model("Artist", artistSchema)
module.exports = Artist