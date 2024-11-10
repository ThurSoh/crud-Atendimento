import { allAtendimento, addAtendimento } from '../model/sacModels.js'

function getHandler(req, res) {    //Importado a função que criamos em sacModels que retorn todos os usuarios.
    const getAll = allAtendimento();
    return res.status(200).json(getAll);
}

function addHandler(req, res) {   //
    const criaSac = req.body;
    const novo_atendiumento = addAtendimento(criaSac);
    return res.status(201).json(novo_atendiumento)
}


export {
    getHandler,
    addHandler
}