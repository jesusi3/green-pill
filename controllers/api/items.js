const Item = require('../../models/itemSchema');
module.exports = {
    index,
}

async function index(req, res) {
   
    const items = await Item.find({}).populate( [{ path: 'category', populate: { path: 'sect' } }]).exec();
    // console.log(items)
    res.json(items);
    console.log(items);
}