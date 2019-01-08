const jwt = require('jsonwebtoken')
const { JwtBlackList } = require('../models/index')
module.exports = app => {
    return (req,res,next) =>{
        const token = req.body.token || req.query.token || req.headers['x-access-token']
        if(token) {
            jwt.verify(token, app.get('superNode-auth'), function(err, decoded) {      
                if (err) {
                    return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });    
                } else {
                    JwtBlackList.findOne({ where: {jwt: token} }).then(jwt =>{
                        if(!jwt){
                            req.decoded = decoded;    
                            next();
                        }else{
                            return res.json({ success: false, message: 'Token está na BlackList' });    
                        }
                    })
                }
            });
        } else {
            return res.status(403).send({ 
                success: false, 
                message: 'Não há token.' 
            });       
        }
    }
}