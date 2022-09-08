const express = require('express');
const router =  express.Router();
const ordersCtrl = require('../../controllers/api/orders');


//Get /api/orders
router.get('/cart', ordersCtrl.cart);

module.exports = router;