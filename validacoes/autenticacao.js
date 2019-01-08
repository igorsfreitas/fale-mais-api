module.exports = (req,res) => {
    req.assert('email', 'E-mail inválido.').isEmail();
    req.assert('senha', 'Preencher a senha').notEmpty();

    var validacaoErros = req.validationErrors() || [];
    console.log('validar1')
    if(validacaoErros.length > 0 ){
        console.log('validar2')
        validacaoErros.forEach(e=>{
            console.log('Erro', e.msg);
        });
        return false;
    }
    console.log('validar3')
    return true;

}