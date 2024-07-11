const productModel = require("../models/product.Schema");

const addproduct = async (req, res) => {
        const {title, price, description, image} = req.body;
    try {
         const pdata = await productModel.create(req.body)
        console.log(pdata)
        res.send("Product added");
    } catch (error) {
        console.error(error);
        res.status(500).send('Issue while adding the product');
    }
};

const getProduct = async (req, res) =>{
    try {
        let data = await productModel.find({})
        res.send(data);
    } catch (error) {
        console.log(error)
        res.send('unable to send data')
    }
}

module.exports = { addproduct, getProduct };
