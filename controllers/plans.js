const { Plans, Destiny } = require('../models/index')

module.exports = app => {

    const fillPlansResponse = plans => {
        let plansFilled = plans.map(plan=>{
            return {
                id: plan.id,
                plan: plan.description,
                minutes: plan.minutes,
                valueExcedentInPercent: plan.value_excedent_in_percent
            }
        })
        return plansFilled
    }

    const fillCallValueSimulatorResponse = (plan, destiny, totalCallMinutes) => {
        let valueExcedentInCents = destiny.value_in_cents+((destiny.value_in_cents/100)*plan.value_excedent_in_percent)
        let callValueSimulated = {
            withPlan: {
                plan: plan.description,
                valueInCents: ((totalCallMinutes-plan.minutes)*valueExcedentInCents) > 0 ? (totalCallMinutes-plan.minutes)*valueExcedentInCents : 0
            },
            withoutPlan: {
                valueInCents: totalCallMinutes*destiny.value_in_cents
            }
        }
        return callValueSimulated
    }

    const PlansController = {
        list: (req,res)=>{
            Plans.findAll()
                .then(plans => {
                    res.status(200).json({
                        message: 'Retornando os Planos Cadastrados',
                        plans: fillPlansResponse(plans)
                    })
                })
                .catch(error=>res.json({
                    error:error,
                    data:[]
                }))
        },

        getCallValue: (req,res)=>{
            Plans.findOne(({where: {id: req.params.planId}}))
                .then(plan => {
                    Destiny.findOne(({where: {id: req.params.destinyId}}))
                        .then(destiny=>{
                            res.status(200).json({
                                message: 'Retornando a simulação dos valores para a chamada',
                                data: fillCallValueSimulatorResponse(plan, destiny, req.query.totalCallMinutes)
                            })
                        })
                        .catch(error=>res.json({
                            error:error,
                            data:[]
                        }))
                    //Calculo Com Plano: ValorChamadaInCents = (Minutos-MinutosFranquiaPlano)*(TarifaDestino*((TarifaDestino/100)+1))
                    //Calculo Sem Plano: ValorChamadaInCents = Minutos*TarifaDestino
                    // res.status(200).json({
                    //     message: `Retornando os destinos cadastrados para a origem ${1}`,
                    //     destinies: fillOriginsResponse(destinies)
                    // })
                })
                .catch(error=>res.json({
                    error:error,
                    data:[]
                }))
        },

    }

    return PlansController;
}