const Joi = require('joi')
const mongoose = require('mongoose')

const faturaSchema = new mongoose.Schema({
    iDusuario: {
        type: String,
        required: true,
        min: 4,
        max: 255,
        trim: true
    },
    nomeEmpresa: {
        type: String,
        required: true,
        min: 4,
        max: 255,
        trim: true
    },
    valor: {
        type: Number,
        required: true,
        min: 1,
    },
    dataVencimento: {
        type: Date,
        default: Date.now,
    },
    pagou: {
        type: String,
        required: true,
        min: 4,
        max: 255
    }
})

const Fatura = mongoose.model('Fatura', faturaSchema)

function validarFaturas(fatura) {
    const schema = {
        nomeEmpresa: Joi.string().min(4).max(255).required(),
        iDusuario: Joi.string().min(4).max(255).required(),
        valor: Joi.number().min(1).required(),
        pagou: Joi.string().min(4).max(255).required()
    }
    return Joi.validate(fatura, schema)
}

exports.Fatura = Fatura
exports.validarFaturas = validarFaturas