'use strict'

import Product from './product.model.js'

export const test = (req, res) => {
    return res.send('Hello world');
};

export const createProduct = async (req, res) => {
    try {
        let data = req.body;
        let product = new Product(data);
        await product.save();
        return res.send({ message: 'Product created successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error creating product', err });
    }
};

export const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found or not updated' });
        }
        return res.send({ message: 'Product updated successfully', updatedProduct });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating product' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedProduct = await Product.findByIdAndDelete(id);
        console.log('Antes del if',deleteProduct.name)
        if (!deletedProduct) {
            return res.status(404).send({ message: 'Product not found or not deleted' });
        }
        return res.send({ message: `Product deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting product' });
    }
};
