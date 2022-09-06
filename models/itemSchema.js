const Schema = require('mongoose').Schema;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// require('./categorySchema');

const itemSchema = new Schema({
    name: { type: String, required: true },
    img: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category' },
    price: {type: Number, required: true, default: 0}
}, {
    timestamps: true
})

// module.exports = mongoose.model('Item', itemSchema);
module.exports = itemSchema;