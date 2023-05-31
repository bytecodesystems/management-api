import app, { usersController } from '../../index.js'

// get student grades (all subjects)
app.post('/login', usersController.login.bind(usersController))