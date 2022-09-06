const Schema = require('mongoose').Schema;
require('./mainCategory');


const categorySchema = new Schema({
    name: {type: String, required: true},
    sect: {type: Schema.Types.ObjectId, ref: 'MainCat'},
    sortOrder: Number,
}, { 
    timestamps: true
});

module.exports = ('Category',categorySchema);