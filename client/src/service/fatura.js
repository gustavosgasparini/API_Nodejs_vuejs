import { http } from './config'


export default {
    listar:() => {
        return http.get('fatura')
    },

    listarUmaFatura:(id) => {
        return http.get('fatura/' + id)
    },

    atualizar:(id, fatura) => {
        return http.put('fatura/' + id, fatura)
    },

    salvar:(fatura) => {
        return http.post('fatura', fatura)
    },

    apagar:(_id) => {
        return http.delete('fatura/' + _id)
    }
}