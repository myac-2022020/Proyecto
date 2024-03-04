'use strict'

import { validateJwt } from '../middlewares/validate.jwt.js'
import  Trolley from './trolley.model.js'
import User from '../user/user.model.js'
import Product from '../product/product.model.js'


export const test = (req, res)=>{
    return res.send('Hello world')
}

export const addToCart = async(req, res)=>{
    try {
        let { idUser } = req.uid
        let { idProducto } = req.body
        let user = await User.findOne(idUser)
        if(!user) return res.status(500).send({message: 'User not found'})
        let producto = await Product.findOne(id)
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Purchase error'})
    }
}