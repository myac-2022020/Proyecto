'use strict'

import  Trolley from './trolley.model.js'
import User from '../user/user.model.js'
import Product from '../product/product.model.js'

export const test = (req, res)=>{
    return res.send('Hello world')
}

export const addToCart = async (req, res) => {
    try {
        let data = req.body;
        let idUser = req.uid;
        let idProduct = data.product;
        let user = await User.findOne({ _id: idUser });
        if (!user) return res.status(404).send({ message: 'User not found' });
        let products = await Product.findOne({ _id: data.product });
        if (!data.amount) return res.status(404).send({ message: 'Your product quantity cannot be 0' });
        // let stockBefore = products.stock;
        // console.log('Stock antes de la compra', stockBefore);
        // let dataStock = products.stock - data.amount;
        // console.log('Stock después de la compra', dataStock);
        // let newStock = await Product.findOneAndUpdate({ _id: idProduct }, { stock: dataStock }, { new: true });
        const cartItem = new Trolley({
            user: idUser,
            product: data.product,
            amount: data.amount,
        });
        await cartItem.save();
        console.log('Add to cart successfully');
        return res.send({ message: 'Add to cart successfully', user, products, cartItem });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error for add products' });
    }
};
