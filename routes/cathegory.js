module.exports = app => {
    const cathegory = app.controllers.cathegory
    const auth = require('../middlewares/auth')
    const permission = require('../middlewares/permission')
    
    app.route('/api/categories')
        .get(auth(app), permission(app), cathegory.list)
        .post(auth(app), permission(app), cathegory.add);

    app.route('/api/categories/:id')
        .delete(auth(app), cathegory.delete)
        .put(auth(app), cathegory.edit)
}