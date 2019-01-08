const axios =  require('axios')
module.exports = app => {

    const AddressRepository = {
        
        findAddressByCep: (cep) => {
            return new Promise(function(resolve, reject){
                axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(
                    res => {
                        resolve(res.data)
                    },
                    err => {
                        reject(err)
                    }
                )}
            )
        }

    }

    return AddressRepository;
}