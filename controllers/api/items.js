const Item = require('../../models/item');
module.exports = {
    index,
}

async function index(req, res) {  
    const items = await Item.find({}).populate('category').exec();
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(items);

}