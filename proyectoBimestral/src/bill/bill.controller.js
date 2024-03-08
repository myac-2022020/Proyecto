'use strict'

import Bill from './bill.model.js'
import User from '../user/user.model.js'
import Trolley from '../trolley/trolley.model.js'
import Product from '../product/product.model.js'
import Bills from '../bill/bill.model.js'

export const test = (req, res)=>{
    return res.send('Hello world')
}

export const extendBill = async(req, res) =>{
    try {
        let _id = req.uid
        console.log(_id);
        let user = await User.findOne({ _id })
        if(!user) return res.status(404).send({message: 'User not found'})
        let cart = await Trolley.find({user: _id}).populate('user', ['name'])
        if(cart.length === 0) return res.status(404).send({message: 'Cart data not found'})
        let idProduct = cart.Product
        let products = await Product.find({idProduct})
        console.log(products.length);
        let vueltas = 0
        if(vueltas == 0){
            console.log('Entramos al If');
            if(vueltas != products.length){
                
            }
        }
        return res.send({message: 'Finished this method', cart})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error for bill extended'})
    }
}