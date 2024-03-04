'use strict'

import { Schema, model } from 'mongoose'

const trolleySchema = Schema({
    user:{
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    },
    products:{
        type: Schema.ObjectId,
        ref: 'product',
        required: true
    },
},{
    versionKey: false
})

export default model('trolley', trolleySchema)