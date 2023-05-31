import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default class UsersService {
    #pool

    constructor({ pool }) {
        this.#pool = pool
    }

    // login
    async login(username, password) {
        try {
            const [rows] = await this.#pool
                .promise()
                .execute('SELECT * FROM users WHERE username = ?', [username])

            const user = rows[0]

            if (rows.length == 0 || user.password !== password ) {
                return false
            }

            const token = Jwt.sign({
                id: user.id,
                email: user.email
            }, process.env.JWT_SECRET_KEY)

            return token
        }
        catch (error) {
            throw error
        }
    }
}