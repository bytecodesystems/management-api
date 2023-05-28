import app, { gradesController } from '../../index.js'

// get student grades (all subjects)
app.post('/grades', gradesController.getStudentGrades.bind(gradesController))