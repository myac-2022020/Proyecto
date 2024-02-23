'use strict'

import { Router } from 'express'
import { createCategory, deleteCategory, test, updateCategory } from './category.controller.js'
import { isAdmin, validateJwt } from '../middlewares/validate.jwt.js'

const api = Router()

api.get('/test',[validateJwt, isAdmin], test)
api.post('/create',[validateJwt, isAdmin], createCategory)
api.put('/update/:id',[validateJwt, isAdmin], updateCategory)
api.delete('/delete/:id',[validateJwt, isAdmin], deleteCategory)

export default api