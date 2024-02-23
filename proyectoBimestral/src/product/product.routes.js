'use strict'

import { Router } from 'express'
import { createProduct, deleteProduct, test, updateProduct } from './product.controller.js'


const api = Router()

api.get('/test', test)
api.post('/create', createProduct)
api.put('/update/:id', updateProduct)
api.delete('/delete/:id', deleteProduct)


export default api