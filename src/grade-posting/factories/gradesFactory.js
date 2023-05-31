import GradesController from '../controllers/GradesController.js'
import GradesService from '../services/GradesService.js'
import pool from '../../pool.js'

const gradesFactory = {
    async initialize() {
        return GradesController.initialize({
            service: new GradesService({
                pool
            })
        })
    }
}

export default gradesFactory