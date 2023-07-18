const {Router}  = require('express')
const { GET, POST, PUT, DELETE } = require('../controllers/teachers.controller.js')
const teacherRoutes = Router()

teacherRoutes
.get('/teachers' ,GET)
.get('/teachers/:id' ,GET)
.post('/teachers/' ,POST)
.put('/teachers/:id' ,PUT)
.delete('/teachers/:id' ,DELETE)

module.exports ={teacherRoutes}