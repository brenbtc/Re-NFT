//(Dependencies)
//--------------------------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nftSchema = new Schema (
    {
     img: {type: String, required: true},
     name: {type: String, required: true},
     floorPrice: {type: Number, required: true},
     currentPrice: {type: Number, required: true},
     owners: {type: String, default: 0}
    }
)


const NFT = mongoose.model("NFT", nftSchema);
module.exports = NFT