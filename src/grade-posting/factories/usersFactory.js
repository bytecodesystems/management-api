import UsersController from '../controllers/UsersController.js'
import UsersService from '../services/UsersService.js'
import pool from '../../pool.js'

const usersFactory = {
    async initialize() {
        return UsersController.initialize({
            service: new UsersService({
                pool
            })
        })
    }
}

export default usersFactory