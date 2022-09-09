const express = require('express');
const router =  express.Router();
const ordersCtrl = require('../../controllers/api/orders');


//Get /api/orders
router.get('/cart', ordersCtrl.cart);

//Post /api/orders/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);

module.exports = router;