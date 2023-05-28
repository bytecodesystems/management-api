export default class SubjectsController {
    #service

    constructor({ service }) {
        this.#service = service
    }

    // initialize
    static async initialize(deps) {
        const controller = new SubjectsController(deps)
        return controller
    }
}