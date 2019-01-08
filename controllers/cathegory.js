const { Cathegory } = require('../models/index')

module.exports = app => {

    const fillCategoryResponse = category => {
        return {
            id: category.id,
            categoria: category.descricao
        }
    }

    const fillCategoriesResponse = categories => {
        let categoriesFilled = categories.map(category=>{
            return {
                id: category.id,
                categoria: category.descricao
            }
        })
        return categoriesFilled
    }

    const CathegoryController = {
        list: (req,res)=>{
            Cathegory.findAll()
                .then(categories => {
                    res.status(200).json({
                        message: 'Retornando as Categorias',
                        categories: fillCategoriesResponse(categories)
                    })
                })
                .catch(error=>res.json({
                    error:error,
                    data:[]
                }))
        },

        add: (req,res) => {
            const newCathegory = {
                descricao: req.body.cathegory
            }
            if(req.body.cathegory){
                const where = { where:{ descricao: req.body.cathegory } }
                
                Cathegory.findOne(where).then(
                    cathegory => {
                        if(!cathegory){
                            Cathegory
                                .build(newCathegory)
                                .save()
                                .then(cathegoryCreated=>{
                                    res.json({
                                        success: true,
                                        message: 'Categoria cadastrada com sucesso!',
                                        cathegory: fillCategoryResponse(cathegoryCreated)
                                    })
                                })
                        } else res.json({ success: false, message: `Categoria já cadastrada no sistema`})
                    },
                    err => {
                        res.json({ success: false, message: `Erro na busca da categoria`})
                    }
                )
            }else{
                res.json({ success: false, 'erro':`Falta preencher o campo "cathegory"`})
            }
        },

        edit: (req,res)=>{
            const editCathegory = { descricao: req.body.cathegory }
            if(req.body.cathegory){
                Cathegory.findOne({where: {id: req.params.id}}).then(
                    cathegory => {
                        if(cathegory){
                            cathegory.update(editCathegory, {where: {id: req.params.id}, individualHooks: true }).then(function () {
                                res.json({
                                    success: true,
                                    message: 'Categoria atualizada com sucesso !',
                                    cathegory: fillCategoryResponse(cathegory)
                                })
                            });
                        } else res.json({ success: false, message: `Categoria não encontrada no banco de dados`})
                    },
                    err => {
                        res.json({ success: false, message: `Erro na busca da categoria: ${err}`})
                    }
                );
            }else{
                res.json({ success: false, 'erro':`Falta preencher o campo "cathegory"`})
            }
        },

        delete: (req,res)=>{
            Cathegory.findOne({where: {id: req.params.id}}).then(
                cathegory => {
                    if(cathegory){
                        cathegory.update({active: false}, {where: {id: cathegory.id}, individualHooks: true }).then(function () {
                            res.json({
                                success: true,
                                message: 'Categoria apagada do sistema !'
                            })
                        });
                    } else res.json({ success: false, message: `Categoria não encontrada no banco de dados`})
                },
                err => {
                    res.json({ success: false, message: `Erro na busca da categoria: ${err}`})
                }
            );
        }

    }

    return CathegoryController;
}