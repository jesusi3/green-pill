const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./itemSchema');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1},
    item: itemSchema
}, {
    timestamps: true,
    toJson: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function () {
    return this.qty * this.item.price;
})


const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required:true},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false},
},{ 
    timestamps: true,
    toJson: { virtuals: true }
});

orderSchema.virtuals('orderTotal').get(function() {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
})

orderSchema.virtuals('totalQty').get(function() {
    return this.lineItems.reduce((total,item) => total + item.qty, 0);
})

orderSchema.virtuals('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
})

module.exports = mongoose.model('Order', orderSchema);