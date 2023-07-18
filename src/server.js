const express = require('express')
const { teacherRoutes } = require('./routers/teacher.routes.js')
const app = express()

app.use(express.json())
app.use(teacherRoutes)

app.listen(9000)
