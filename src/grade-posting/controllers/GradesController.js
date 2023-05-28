export default class GradesController {
    #service

    constructor({ service }) {
        this.#service = service
    }

    // get student grades (all subjects)
    async getStudentGrades(request, response) {
        const { student_id } = request.body

        try {
            const grades = await this.#service.getStudentGrades(student_id)

            response.status(200).json({ grades })
        }
        catch (error) {
            console.log(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // initialize
    static async initialize(deps) {
        const controller = new GradesController(deps)
        return controller
    }
}