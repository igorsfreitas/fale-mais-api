module.exports = app => {
    const destinies = app.controllers.destinies
    
    app.route('/api/destinies/:originId')
        .get(destinies.list)
}