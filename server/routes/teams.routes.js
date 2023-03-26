const Controller = require('../controllers/controller')


module.exports = (app) => {
    app.get('/api/teams', Controller.getAll)
    app.post('/api/teams', Controller.create)
    app.get('/api/teams/:id', Controller.getOne)
    app.put('/api/teams/:id', Controller.updateOne)
    app.delete('/api/teams/:id', Controller.deleteOne)
}   