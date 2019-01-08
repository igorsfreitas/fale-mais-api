module.exports = app => {
    const addressRepository = app.repositories.addressRepository;
    const UserController = {
        findAddressByCep: (req,res) => {
            addressRepository.findAddressByCep(req.query.cep).then(
                address => {
                    res.status(200).json({
                        success: true,
                        address: address
                    })
                },
                err => {
                    res.status(403).json({
                        success: false,
                        error: `Erro na busca do CEP: ${err}`
                    })
                }
            )
        }
    }
    return UserController;
}