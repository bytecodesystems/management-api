import StudentsController from '../controllers/StudentsController.js'
import StudentsService from '../services/StudentsService.js'
import pool from '../../pool.js'

const studentsFactory = {
    async initialize() {
        return StudentsController.initialize({
            service: new StudentsService({
                pool
            })
        })
    }
}

export default studentsFactory