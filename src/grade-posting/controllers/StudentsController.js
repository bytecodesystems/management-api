export default class StudentsController {
    #service

    constructor({ service }) {
        this.#service = service
    }

    // initialize
    static async initialize(deps) {
        const controller = new StudentsController(deps)
        return controller
    }
}