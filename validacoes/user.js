module.exports = (req,res) => {
    const validateErros = req.validationErrors() || [];

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateCPF = (cpf) => {
        let numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1))
                    {
                    digitos_iguais = 0;
                    break;
                    }
        if (!digitos_iguais)
            {
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                    soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                    return false;
            numeros = cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--)
                    soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                    return false;
            return true;
            }
        else
            return false;
  }

    if(!req.body.userName) validateErros.push({msg: 'Missing Param: userName'});
    if(!req.body.password) validateErros.push({msg: 'Missing Param: password'});
    if(!req.body.passwordConfirm) validateErros.push({msg: 'Missing Param: passwordConfirm'});
    if(!req.body.cpf) validateErros.push({msg: 'Missing Param: cpf'});
    if(!validateCPF(req.body.cpf)) validateErros.push({msg: 'Invalid CPF'});
    if(!req.body.firstName) validateErros.push({msg: 'Missing Param: firstName'});
    if(!req.body.lastName) validateErros.push({msg: 'Missing Param: lastName'});
    if(!req.body.email) validateErros.push({msg: 'Missing Param: email'});
    if(!validateEmail(req.body.email)) validateErros.push({msg: 'Invalid email'});
    if(!req.body.birthdate) validateErros.push({msg: 'Missing Param: birthdate'});
    if(!req.body.zipcode) validateErros.push({msg: 'Missing Param: zipcode'});
    if(!req.body.street) validateErros.push({msg: 'Missing Param: street'});
    if(!req.body.streetNumber) validateErros.push({msg: 'Missing Param: streetNumber'});
    if(!req.body.city) validateErros.push({msg: 'Missing Param: city'});
    if(!req.body.state) validateErros.push({msg: 'Missing Param: state'});
    if(!req.body.phoneNumber) validateErros.push({msg: 'Missing Param: phoneNumber'});
    
    //verificar se a senha confere
    if(req.body.password != req.body.passwordConfirm){
        validateErros.push({msg: 'Senhas não conferem (confirmar senha)'});
    }

    if(validateErros.length > 0){
        return res.status(403).send({ 
            success: false, 
            errors: validateErros
        });   
    }else{
        return true;
    }
}