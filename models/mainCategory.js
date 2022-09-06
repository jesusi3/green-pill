const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainCatSchema = new Schema({
    name: String,
}, {
    timestamps: true
});
 
module.exports = ('MainCat', mainCatSchema);