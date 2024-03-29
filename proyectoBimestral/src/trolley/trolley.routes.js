'use strict'

import { Router } from 'express'
import { addToCart, test } from './trolley.controller.js'
import { validateJwt } from '../middlewares/validate.jwt.js'

const api = Router()

api.get('/test', test)
api.post('/addToCart', [validateJwt], addToCart)

export default api