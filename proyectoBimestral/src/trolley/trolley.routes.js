'use strict'

import { Router } from 'express'
import { test } from './trolley.controller.js'

const api = Router()

api.get('/test', test)

export default api