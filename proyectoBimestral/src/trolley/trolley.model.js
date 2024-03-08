import { Schema, model } from 'mongoose';

const trolleySchema = Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true,
    },
    product: {
        type: Schema.ObjectId,
        ref: 'Product',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        //required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
}, {
    versionKey: false,
});

export default model('trolley', trolleySchema);
