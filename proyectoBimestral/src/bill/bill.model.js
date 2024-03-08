import { Schema, model } from 'mongoose'

const billSchema = Schema({
    user:{
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    },
    trolley:{
        type: Schema.ObjectId,
        ref: 'trolley',
        required: true
    },
    product:{
        type: Schema.ObjectId,
        ref: 'product'
    },
    subtotal:{
        type: Number,
        required: true,
        default: 0
    },
    total:{
        type: Number,
        required: true,
        default: 0
    }
},{
    versionKey: false
})

export default model('bill', billSchema)