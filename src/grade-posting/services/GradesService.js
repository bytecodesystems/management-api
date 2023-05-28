export default class GradesService {
    #pool

    constructor ({ pool }) {
        this.#pool = pool
    }

    // get student grades (all subjects)
    async getStudentGrades(student_id) {
        try {
            const [rows] = await this.#pool
                .promise()
                .execute(`
                    SELECT id, student_id, subject_id, grade_1, grade_2, grade_3, grade_4, retake_1, retake_2, final_1, final_2
                    FROM grades
                    WHERE student_id = ?
                `, [student_id])

            return rows
        }
        catch (error) {
            throw error
        }
    }
}