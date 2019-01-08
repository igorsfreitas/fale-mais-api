module.exports = app => {
    const origins = app.controllers.origins
    
    app.route('/api/origins')
        .get(origins.list)
}