export default class StudentsService {
    #pool

    constructor ({ pool }) {
        this.#pool = pool
    }
}