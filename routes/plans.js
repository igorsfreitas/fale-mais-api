module.exports = app => {
    const plans = app.controllers.plans
    
    app.route('/api/plans')
        .get(plans.list)

    app.route('/api/plan/:planId/:destinyId')
        .get(plans.getCallValue)
}