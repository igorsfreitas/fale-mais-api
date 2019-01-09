const { Destiny } = require('../models/index')

module.exports = app => {

    const fillOriginsResponse = destinies => {
        let destiniesFilled = destinies.map(destiny=>{
            return {
                id: destiny.id,
                destiny: destiny.code,
                valueInCents: destiny.value_in_cents
            }
        })
        return destiniesFilled
    }

    const DestiniesController = {
        list: (req,res)=>{
            Destiny.findAll(({where: {origin_id: req.params.originId}}))
                .then(destinies => {
                    res.status(200).json({
                        message: `Retornando os destinos cadastrados para a origem ${1}`,
                        destinies: fillOriginsResponse(destinies)
                    })
                })
                .catch(error=>res.json({
                    error:error,
                    data:[]
                }))
        }

    }

    return DestiniesController;
}