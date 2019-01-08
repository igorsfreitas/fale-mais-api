const { Origins } = require('../models/index')

module.exports = app => {

    const fillOriginsResponse = origins => {
        let originsFilled = origins.map(origin=>{
            return {
                id: origin.id,
                origin: origin.code
            }
        })
        return originsFilled
    }

    const OriginsController = {
        list: (req,res)=>{
            Origins.findAll()
                .then(origins => {
                    res.status(200).json({
                        message: 'Retornando as Origens Cadastradas',
                        origins: fillOriginsResponse(origins)
                    })
                })
                .catch(error=>res.json({
                    error:error,
                    data:[]
                }))
        }

    }

    return OriginsController;
}