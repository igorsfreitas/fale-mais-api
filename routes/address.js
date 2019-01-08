module.exports = app => {
    const address = app.controllers.address
    const auth = require('../middlewares/auth')
    
    app.route('/api/address')
        .get(auth(app), address.findAddressByCep)
}