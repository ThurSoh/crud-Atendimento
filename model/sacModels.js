import { json } from 'express'
const atendimento = [];

function allAtendimento (){
    return atendimento;
}

function addAtendimento (new_sac) {
    const {id_service, name_person, name_service} = new_sac;
    atendimento.push({id_service, name_person, name_service})
    return {message: 'Atendimento Criado'}
}

export  {
    allAtendimento,
    addAtendimento
}