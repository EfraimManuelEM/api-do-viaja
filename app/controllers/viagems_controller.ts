import Viagem from '#models/viagem'
import type { HttpContext } from '@adonisjs/core/http'

export default class ViagemsController {
    async index({}: HttpContext) {
        const viagem = await Viagem.all()
        return viagem
    }

    async store({ request, response}: HttpContext) {
        const data = request.only(['origem', 'destino', 'data', 'hora', 'preco', 'tipo'])
        const viagem = await Viagem.create(data)
        response.status(201)
        return viagem
    }

    async show({ params }: HttpContext) {
        const viagem = await Viagem.findOrFail(params.id)
        return viagem
    }

    async update({ params, request }: HttpContext) {
        const viagem = await Viagem.findOrFail(params.id)
        const data = request.only(['origem', 'destino', 'data', 'hora', 'preco', 'tipo'])
        viagem.merge(data)
        await viagem.save()
        return viagem
    }

    async destroy({ params, response }: HttpContext) {
        const viagem = await Viagem.findOrFail(params.id)
        await viagem.delete()
        response.status(204)
        return {
            message: 'User deleted successfully'
        }
    }
}