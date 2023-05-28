import express from 'express'
import cors from 'cors'

// grade-posting factorys
import gradesFactory from './grade-posting/factories/gradesFactory.js'
import studentsFactory from './grade-posting/factories/gradesFactory.js'
import subjectsFactory from './grade-posting/factories/gradesFactory.js'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// grade-posting factorys
export const gradesController = await gradesFactory.initialize()
export const studentsController = await studentsFactory.initialize()
export const subjectsController = await subjectsFactory.initialize()

export default app