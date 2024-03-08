'use strict'

import { Router } from 'express'
import { extendBill, test } from './bill.controller.js'
import { validateJwt } from '../middlewares/validate.jwt.js'

const api = Router()

api.get('/test', test)
api.post('/extend', [validateJwt], extendBill)

export default api