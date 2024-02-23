'use strict'

import Category from './category.model.js';

export const test = (req, res) => {
    return res.send('Hello world');
};

export const createCategory = async (req, res) => {
    try {
        let data = req.body;
        let category = new Category(data);
        await category.save();
        return res.send({ message: 'Category created successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error creating category', err });
    }
};

export const updateCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });
        if (!updatedCategory) {
            return res.status(404).send({ message: 'Category not found or not updated' });
        }
        return res.send({ message: 'Category updated successfully', updatedCategory });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating category' });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).send({ message: 'Category not found or not deleted' });
        }
        return res.send({ message: `Category deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting category' });
    }
};
