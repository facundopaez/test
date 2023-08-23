const client = new MongoClient(mongoURI);
async function run() {
    const database = client.db('example');
    const products = database.collection('product');
    const query = { $where: `isString(this.${req.query.prop})`};
    const product = await products.findOne(query); // Noncompliant
}
run().catch(console.dir);