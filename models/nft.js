//(Dependencies)
//--------------------------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nftSchema = new Schema (
    {
     img: {type: String},
     name: {type: String, required: true},
     floorPrice: {type: Number, required: true},
     currentPrice: {type: Number, required: true},
     owners: {type: String, default: 0}
    }
)


const Nft = mongoose.model("Nft", nftSchema);
module.exports = Nft