const jwt = require('jsonwebtoken')
module.exports = (app) => {
    const isAllowed = role => {
        //allowed.indexOf(role) > -1;
        if(role==1) return true
    }
    return (req, res, next) => {
        const userJwt = req.body.token || req.query.token || req.headers['x-access-token']
        const roleId = jwt.verify(userJwt, app.get('superNode-auth'), (err, decoded) => decoded.roleId )
        if (roleId && isAllowed(roleId))
        next() // role is allowed, so continue on the next middleware
        else {
            res.status(403).json({ success: false, message: 'User not allowed to this route' })   
        }
    }
}