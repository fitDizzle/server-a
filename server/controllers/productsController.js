const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'attelier-service-provider:att2022!@mongodb://54.176.23.12:27017/';
const source = process.env.DATABASE || 'attelier-product-db';

module.exports = {
  getAllProducts: async (req, res) => {
    console.log('GET ALL PRODUCTS ROUTE HIT');
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    try {
      let products = await client.db(source).collection('products').find({}).toArray();
      res.json(products);
    } finally {
      await client.close();
    }
  }
};
