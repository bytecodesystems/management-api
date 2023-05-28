import GradesController from '../controllers/gradesController.js'
import GradesService from '../services/gradesService.js'
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