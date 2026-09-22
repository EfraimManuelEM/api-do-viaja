import Leitor from '#models/leitor'
import Pagamento from '#models/pagamento'
import type { HttpContext } from '@adonisjs/core/http'

export default class LeitorsController {
    async index({}: HttpContext) {
        const leitor = await Leitor.query()
        .preload('pagamento', (pagamento) => {
            pagamento.preload('user')

            pagamento.preload('assento', (assento) => {
            assento.preload('viagem')
            })
        })

        return leitor
    }

    async store({ request, response }: HttpContext) {
    const pagamentoId  = request.input('pagamentoId') || request.input('pagamento_id')


    if(!pagamentoId) {
        console.log('Body recebido:', request.all())
        return response.status(400).json({
            message: 'PagamentoId obrigatário',
            rececido: request.all()
        })
    }

    const le = await Leitor.query()
        .where('pagamento_id', pagamentoId)
        .first()

    if (le) {
        return response.status(400).json({
            message: 'Este bilhete já foi confirmado!'
        }) 
    }

    const pagamento = await Pagamento.find(pagamentoId)

    if(!pagamento) {
        return response.status(400).json({
            message: 'Pagamento não encotrado'
        })
    }

    const novoLeitor = await Leitor.create({
        pagamentoId: pagamento.id
    })

    return response.status(201).json(novoLeitor)
}

    async update({ params, request }: HttpContext) {
        const leitor = await Leitor.findOrFail(params.id)
        const data = request.only(['pagamentoId'])
        leitor.merge(data)
        await leitor.save()
        return leitor
    }

    async destroy({ params, response }: HttpContext) {
        const leitor = await Leitor.findOrFail(params.id)
        await leitor.delete()
        response.status(204)
        return leitor
    }
}