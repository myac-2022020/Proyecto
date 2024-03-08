'use strict'

import { Router } from 'express'
import { ListNullProducts, createProduct, deleteProduct, listProducts, productsByCategory, searchProduct, test, updateProduct } from './product.controller.js'
import { isAdmin, validateJwt } from '../middlewares/validate.jwt.js'

const api = Router()

api.get('/test', test)
api.post('/create', [validateJwt], [isAdmin], createProduct)
api.put('/update/:id', [validateJwt], [isAdmin], updateProduct)
api.delete('/delete/:id', [validateJwt], [isAdmin], deleteProduct)
api.post('/search', [validateJwt], searchProduct)
api.get('/list', [validateJwt], listProducts)
api.get('/listByCategory/:id', [validateJwt], productsByCategory)
api.get('/listNull', [validateJwt], ListNullProducts)

export default api