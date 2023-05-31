export default class UsersController {
    #service

    constructor({ service }) {
        this.#service = service
    }

    // login
    async login(request, response) {
        const { username, password } = request.body

        try {
            const validated = await this.#service.login(username, password)

            // if validated === true, it will return a jwtoken
            response.status(200).json({ validated })
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // initialize
    static async initialize(deps) {
        const controller = new UsersController(deps)
        return controller
    }
}