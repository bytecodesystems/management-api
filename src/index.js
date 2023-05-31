import express from 'express'
import cors from 'cors'

// general
import usersFactory from './grade-posting/factories/UsersFactory.js'
import studentsFactory from './grade-posting/factories/gradesFactory.js'
import subjectsFactory from './grade-posting/factories/gradesFactory.js'

// grade-posting factorys
import gradesFactory from './grade-posting/factories/gradesFactory.js'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// Auth Middleware (not using yet)
function authenticateToken(request, response, next) {
    const token = request.headers.authorization?.split(' ')[1];

    if (token == null) {
        return response.status(401); // no token
    }

    jwt.verify(token, 'bytebytebyte', (error, user) => {
        if (error) {
            return response.status(403); // invalid token
        }

        request.user = user; // store decoded user in request
        next();
    });
}

// grade-posting factorys
export const usersController = await usersFactory.initialize()
export const studentsController = await studentsFactory.initialize()
export const subjectsController = await subjectsFactory.initialize()
export const gradesController = await gradesFactory.initialize()

export default app