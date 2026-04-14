import Assento from '#models/assento'
import type { HttpContext } from '@adonisjs/core/http'

export default class AssentosController {
  async index({}: HttpContext) {
    const assentos = await Assento
      .query()
      .preload('viagem')

    return assentos
  }

  async store({ request, response }: HttpContext) {
    const { assento, viagemId } = request.only(['assento', 'viagemId'])

    console.log(request.all())

    // Verificar se o assento já está ocupado
    const ocupado = await Assento.query()
      .where('viagem_id', viagemId)
      .andWhere('assento', assento)
      .first()

    if (ocupado) {
      return response.status(400).json({
        message: `Assento #${assento} já está ocupado!`
      })
    }

    // Criar assento se livre
    const novoAssento = await Assento.create({ assento, viagemId })
    return response.status(201).json(novoAssento)
  }

  async show({ params }: HttpContext) {
    const assento = await Assento
      .query()
      .preload('viagem')
      .where('id', params.id)
      .firstOrFail()

    return assento
  }

  async update({ params, request }: HttpContext) {
    const assento = await Assento.findOrFail(params.id)
    const data = request.only(['assento', 'viagemId'])
    assento.merge(data)
    await assento.save()
    return assento
  }

  async destroy({ params, response }: HttpContext) {
    const assento = await Assento.findOrFail(params.id)
    await assento.delete()
    response.status(204)
    return assento
  }
}