import SubjectsController from '../controllers/SubjectsController.js'
import SubjectsService from '../services/SubjectsService.js'
import pool from '../../pool.js'

const subjectsFactory = {
    async initialize() {
        return SubjectsController.initialize({
            service: new SubjectsService({
                pool
            })
        })
    }
}

export default subjectsFactory