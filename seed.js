require('dotenv').config();
require('./config/database');

// const MainCat = require('./models/mainCategory');
const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    // await MainCat.deleteMany({});
    // const mainCategories = await MainCat.create([
    // {name: 'Supplement'},
    // {name: 'Equipment'},]);
    

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Protein', category: 'Supplements' ,sortOrder: 10},
        {name: 'Pre-Workout', category: 'Supplements' ,sortOrder: 20},
        {name: 'Mass Gainers', category: 'Supplements' ,sortOrder: 30},
        {name: 'Vitamins & Health', category: 'Supplements' ,sortOrder: 40},
        {name: 'Creatine', category: 'Supplements' ,sortOrder: 50},
        {name: 'Dumbbells', category: 'Equipment' ,sortOrder: 60},
        {name: 'Weight Plates', category: 'Equipment' ,sortOrder: 70},
        {name: 'Power Racks', category: 'Equipment' ,sortOrder: 80},
        {name: 'Cardio MAchines', category: 'Equipment' ,sortOrder: 90},
        {name: 'Weight Machines', category: 'Equipment' ,sortOrder: 100},
    ]);
    
    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'NutraBio 100% Whey Protein Isolate', img: 'https://cdn.shopify.com/s/files/1/0014/1829/7402/products/NewProject_333_1200x1200.png?v=1630860623', category: categories[0], price: 54.99},
        {name: 'Dymatize ISO100 Hydrolyzed Whey Protein Isolate', img: 'https://www.kroger.com/product/images/large/front/0070501635313', category: categories[0], price: 49.99},
        {name: 'Cira Nutrition Brighter Whey', img: 'https://cdn.shopify.com/s/files/1/0503/6110/6616/products/Amino_Glow_Jito_Front_grande.png?v=1661794074', category: categories[0], price: 26.24},
        {name: 'JYM Supplement Science Pro JYM Protein Powder', img: 'https://cdn.shopify.com/s/files/1/0564/2439/9023/products/PRJ02CC_20942_021522_V1.4_Front-1200px_1024x1024.png?v=1656695993', category: categories[0], price: 39.99},
        {name: 'RSP Nutrition TrueFit Grass-Fed Protein', img: 'https://cdn.shopify.com/s/files/1/1973/8173/products/TrueFitGrassFed_Chocolate_40Serv_MilkSpecialties_Front_HighRes_V1_grande.png?v=1657808884', category: categories[0], price: 35.17},
        {name: 'JNX Sports The Curse', img: 'https://gymbeam.com/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/t/h/the-curse-watermelon-50-serve-drop-shadow.png', category: categories[1], price: 20.99},
        {name: 'Kaged Pre Kaged ELITE', img: 'https://cdn.shopify.com/s/files/1/0106/6893/3220/products/PKE-FP_f4949e89-4ca2-4b11-97bc-c8d975006fe4_1200x.png?v=1659382040', category: categories[1], price: 59.99},
        {name: 'Cellucor C4 Dynasty', img: 'https://cdn.shopify.com/s/files/1/0015/6391/8448/products/Cellucor_C4-Dynasty_30Serve_FrozenBombsicle.png?v=1654141728', category: categories[1], price: 69.99},
        {name: 'Bucked Up Pre-Workout', img: 'https://www.buckedup.com/public/default/img/home/products/bucked%20up%202.webp', category: categories[1], price: 42.95},
        {name: 'Animal Fury Pre-Workout', img: 'https://www.tropicanawholesale.com/Images/Product/Default/xlarge/AM59.png', category: categories[1], price: 28.95},
        {name: 'Optimum Nutrition Serious Mass Weight Gainer', img: 'https://i5.walmartimages.com/asr/5924b560-2be3-4745-ba93-9524b91fc9d8.6a128a88db4da6dcf855c5f7c9a35260.png', category: categories[2], price: 44.99},
        {name: 'Kaged Clean Meal', img: 'https://cdn.shopify.com/s/files/1/1110/3248/products/KM-CMRP-020SD-V1-FRONT_5000x.png?v=1631722423', category: categories[2], price: 49.99},
        {name: 'Dymatize Super Mass Gainer', img: 'http://cdn.shopify.com/s/files/1/2035/6541/products/dymatize-super-mass-gainer-29kg-rich-chocolate-693651-en_0ce9bed5-9b2c-49a6-ac75-e8aa5584eed6_1024x1024.png?v=1651074431', category: categories[2], price: 59.99},
        {name: 'Universal Nutrition Real Gains', img: 'http://cdn.shopify.com/s/files/1/0074/9115/8129/products/84f74eb5ac4506e001455307dc42830e.gif?v=1579877978', category: categories[2], price: 82.95},
        {name: 'MHP Up Your Mass XXXL 1350', img: 'https://siteimgs.com/10017/item/mhp-probolic-5lb-chocolat_1602865772-0.jpg', category: categories[2], price: 49.99},
        {name: 'Optimum Nutrition Opti-Men Multivitamin for Men', img: 'https://i5.walmartimages.com/asr/8318ba9c-d690-4e05-a6b5-5f88e84faf6f_2.12a91c099d036a06f1618026d406bb64.png', category: categories[3], price: 29.99},
        {name: 'Animal Pak Multivitamin', img: 'https://gymbeam.com/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/a/n/animal_pak.png', category: categories[3], price: 32.99},
        {name: 'EVLUTION NUTRITION Collagen Peptides', img: 'http://cdn.shopify.com/s/files/1/2377/6253/products/4D1DDDD2-B9F0-4BED-9909-AAC8232078E3_1200x1200.png?v=1607490956', category: categories[3], price: 39.99},
        {name: 'Optimum Nutrition Fish Oil Softgels', img: 'https://content.optimumnutrition.com/i/on/on-fish-oil_Image_02?PDP_THUMB_003$&fmt=auto&locale=en-us,en-gb,*&img404=no-product-image&v=1', category: categories[3], price: 16.99},
        {name: 'MuscleTech Platinum Multi Vitamin', img: 'https://cdn11.bigcommerce.com/s-8atiyfebxx/images/stencil/1280x1280/products/461/1368/muscletech-platinum-multivitamin__39202.1603989605.png?c=2', category: categories[3], price: 14.99},
        {name: 'Optimum Nutrition Micronized Creatine Powder', img: 'https://content.optimumnutrition.com/i/on/on-creatine-micronized_Image_01?locale=en-gb,*', category: categories[4], price: 47.99},
        {name: 'RSP Nutrition Creatine Monohydrate', img: 'https://shapeupstore.net/storage/images/others/rspcreatine-1653549082.png', category: categories[4], price: 26.99},
        {name: 'MuscleTech Creactor Creatine HCl', img: 'https://www.muscletech.com/wp-content/uploads/muscletech-celltech-creactor-450x450.png', category: categories[4], price: 29.99},
        {name: 'JNX Sports The Curse! Creatine', img: 'https://siteimgs.com/10017/item/the-curse-creatine-front_1660078817-0.jpg', category: categories[4], price: 20.99},
        {name: 'Universal Nutrition Creatine', img: 'https://cdn.shopify.com/s/files/1/0080/5663/5503/products/600x600xCreatine_500g.jpg.pagespeed.ic.yq58Vdo9Yx_533x.png?v=1639163301', category: categories[4], price: 44.99},
        {name: 'Powerblocok Dumbbells: Pro 32 Commercial Set', img: 'https://www.johnsonfitness.com/Content/product_images/505-00120-01.png', category: categories[5], price: 339.00},
        {name: '15LB Poly Hex Dumbbell - Pair', img: 'https://rxfitnessequipment.com/wp-content/uploads/5e14d1f5052483c255d6c661_Rubber-Hex-15lb-e1592876446480-3.png', category: categories[5], price: 30.99},
        {name: 'Rogue Rubber Hex Dumbbell Set: 5 - 50lbs', img: 'https://cdn.wodreview.com/storage/images/7125.jpg', category: categories[5], price: 990.00},
        {name: 'Rogue Rubber Hex Dumbbell Set: 105 - 125lbs', img: 'https://cdn.shopify.com/s/files/1/0574/1215/7598/t/16/assets/acf.DB-3000-550-Main.png?v=1635798972', category: categories[5], price: 2058.00},
        {name: 'Rogue Rubber Hex Dumbbell Set: 55 - 100lbs', img: 'https://www.johnsonfitness.com/Content/product_images/SDR100.png', category: categories[5], price: 2749.00},
        {name: 'Cast Iron Olympic Weight Plates: 2.5 lbs', img: 'https://cdn.shopify.com/s/files/1/0515/7738/9251/products/olympicstandard2.5lbs800x800.png?v=1620794583', category: categories[6], price: 5.63},
        {name: 'Cast Iron Olympic Weight Plates: 10 lbs', img: 'https://i5.walmartimages.com/asr/85fabcbf-fa8c-4291-9773-e14f9d093cbd_1.3345992eea255e20f77aabba7f11c309.png', category: categories[6], price: 22.50},
        {name: 'Cast Iron Olympic Weight Plates: 25 lbs', img: 'https://cdn.shopify.com/s/files/1/0542/2130/8101/products/barbellstandard25_1024x1024.png?v=1632321367', category: categories[6], price: 37.25},
        {name: 'Cast Iron Olympic Weight Plates: 35 lbs', img: 'https://cdn.shopify.com/s/files/1/0636/1753/2134/products/884b5227-4216-4de6-858d-ed4f4a2d381c_800x.png?v=1655192931', category: categories[6], price: 52.15},
        {name: 'Cast Iron Olympic Weight Plates: 45 lbs', img: 'https://i0.wp.com/fakeweights.com/wp-content/uploads/2018/11/fake-weights-45lb-20kg-3.png', category: categories[6], price: 67.05},
        {name: 'PR-5000 Rack Builder', img: 'https://barbend.com/wp-content/uploads/2022/07/REP-PR-5000-Power-Rack-Coupon-275x275.png', category: categories[7], price: 2749.00},
        {name: 'PL-340 Half Rack', img: 'https://www.promaxima.com/pub/media/catalog/product/cache/small_image/400x437/beff4985b56e3afdbeabfc89641a4582/p/l/pl-540-1-2022.png', category: categories[7], price: 1000.00},
        {name: 'Nautilus Olympic Bench Press', img: 'https://cdn-cmmnj.nitrocdn.com/hWdqgBUqVSYeeDweoutlDraZjiiHKsDt/assets/static/optimized/rev-57f633e/wp-content/uploads/2021/06/Nautilus-Olympic-Bench-Press-2.png', category: categories[7], price: 1549.00},
        {name: 'AB-5100 Adjustable Weight Bench', img: 'https://i0.wp.com/cdn.shopify.com/s/files/1/0575/5401/0306/t/15/assets/acf.AB-5100-Matte-Main.png?w=640&ssl=1', category: categories[7], price: 499.99},
        {name: 'Dumbbell Storage Rack', img: 'https://cdn.shopify.com/s/files/1/0575/5401/0306/t/15/assets/acf.Dumbbell-Rack-Matte-Main.png?v=1635452197', category: categories[7], price: 209.00},
        {name: 'Treadmill T30', img: 'http://cdn.shopify.com/s/files/1/0554/8795/5111/products/MXR20_T30-XIR20treadmill_hero-1.png?v=1619443689', category: categories[8], price: 2749.00},
        {name: 'C 110i Treadmill', img: 'https://res.cloudinary.com/iconfitness/image/upload/dpr_auto,f_auto,fl_progressive.lossy,q_auto,w_auto/v1/site--15/NTL99622_Specials_Desktop-2x-V5.png', category: categories[8], price: 1872.00},
        {name: 'Bike+ Ultimate', img: 'https://imageio.forbes.com/blogs-images/jonobacon/files/2018/12/bike.ae83fbea-1200x1200.jpg?format=jpg&width=960', category: categories[8], price: 2875.00},
        {name: 'Schwinn IC3 Indoor Cycling Bike', img: 'https://www.schwinnfitness.com/on/demandware.static/-/Sites-nautilus-master-catalog/default/dw99c53b78/images/schwinn/indoor-cycling-bikes/ic3/100718/schwinn-ic3.png', category: categories[8], price: 649.00},
        {name: 'Matrix Row Machine', img: 'https://www.johnsonfitness.com/Content/product_images/ROWER-02.png', category: categories[8], price: 2385.00},
        {name: 'Life Fitness Signature Series Plate Load Incline Chest Press', img: 'https://www.lifefitness.com/resource/image/35644/portrait_ratio1x1/400/400/dee30fcdd3c45012af31ba86659181b6/Nm/plateloaded-inclinepress.png', category: categories[9], price: 2499.99},
        {name: 'Cybex Prestige Strength VRS Fly/Rear Delt', img: 'https://www.lifefitness.com/resource/blob/1417446/a834d1c69d3a9b27bd6472ae8d1b450e/prestige-strength-vrs-fly-rear-delt-1--data.png', category: categories[9], price: 3249.00},
        {name: 'Matrix Versa Leg Extension', img: 'https://txz27ptd.tinifycdn.com/Content/product_images/MD-S711.PNG', category: categories[9], price: 7190.00},
        {name: 'Body-Solid Seated Row Machine', img: 'https://cdn-cmmnj.nitrocdn.com/hWdqgBUqVSYeeDweoutlDraZjiiHKsDt/assets/static/optimized/rev-57f633e/wp-content/uploads/2010/12/Body-Solid-Seated-Row-Machine-GSRM40.png', category: categories[9], price: 696.00},
        {name: 'Lat Pulldown Machine', img: 'https://www.lifefitness.co.uk/resource/image/57006/portrait_ratio1x1/400/400/a3a9e592ab20e95206268b1ceb7a8ba0/bI/hammer-strength-select-lat-pulldown-l.png', category: categories[9], price: 3065.00},
    ]);
    console.log(items)

    process.exit();
})();