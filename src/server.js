import app from './index.js'
import dotenv from 'dotenv'

// post-grading routes
import './grade-posting/routes/grades.js'
import './grade-posting/routes/students.js'
import './grade-posting/routes/subjsects.js'

dotenv.config()
const port = process.env.PORT || 3000

app.listen(port, () => {
    const date = new Date()
    console.log(`Server started at ${date} at port ${port}`)
})