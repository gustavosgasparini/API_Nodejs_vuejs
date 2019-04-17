const { Fatura, validarFaturas } = require('../model/fatura')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const fatura = await Fatura.find().sort('-dataVencimento')
    res.send(fatura)
})

router.get('/:id', async (req, res) => {
    const fatura = await Fatura.findById(req.params.id)
    if (!fatura) return res.status(404).send('A fatura que procura não existe.')
    res.send(fatura)
})

router.post('/', async (req, res) => {
    const { error } = validarFaturas(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let fatura = new Fatura({
        iDusuario: req.body.iDusuario,
        nomeEmpresa: req.body.nomeEmpresa,
        valor: req.body.valor,
        pagou: req.body.pagou
    })
    fatura = await fatura.save()

    res.send(fatura)
})

router.put('/:id', async (req, res) => {
    const { error } = validarFaturas(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const fatura = await Fatura.findByIdAndUpdate(req.params.id, {
        iDusuario: req.body.iDusuario,
        nomeEmpresa: req.body.nomeEmpresa,
        valor: req.body.valor,
        pagou: req.body.pagou
    }, { new:true })

    if (!fatura) return res.status(404).send('A fatura que procura não existe.')

    res.send(fatura)
})

router.delete('/:id', async (req, res) => {
    const fatura = await Fatura.findByIdAndRemove(req.params.id)
    if (!fatura) return res.status(404).send('A fatura que procura não existe.')
    res.send(fatura)
})

module.exports = router;