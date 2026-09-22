import Assento from '#models/assento'
import Pagamento from '#models/pagamento'
import type { HttpContext } from '@adonisjs/core/http'
import QRCode from 'qrcode'
import { randomUUID } from 'node:crypto'

export default class PagamentosController {

  // LISTAR TODOS OS PAGAMENTOS (ADMIN)
  async index({}: HttpContext) {
    return await Pagamento
      .query()
      .preload('user')
      .preload('assento', (q) => {
        q.preload('viagem')
      })
  }

  // LISTAR PAGAMENTOS DO USUÁRIO LOGADO
  async meusPagamentos({ auth }: HttpContext) {
    const user = await auth.authenticate()

    return await Pagamento
      .query()
      .where('user_id', user.id)
      .preload('user')
      .preload('assento', (q) => {
        q.preload('viagem')
      })
  }

  // CRIAR PAGAMENTO
  async store({ request, response, auth }: HttpContext) {
    const user = await auth.authenticate()

    const data = request.only([
      'metodo',
      'assentoId',
    ])

    if (!data.assentoId) {
      return response.badRequest({
        message: 'assentoId não enviado'
      })
    }

    const assento = await Assento.find(data.assentoId)

    if (!assento) {
      return response.badRequest({
        message: 'Assento não encontrado'
      })
    }

    const reservado = await Pagamento
      .query()
      .where('assento_id', assento.id)
      .first()

    if (reservado) {
      return response.badRequest({
        message: 'Este assento já foi reservado'
      })
    }

    const codigo = 'PAY163-' + randomUUID().split('-')[0].toUpperCase()

    const qrCode = await QRCode.toDataURL(codigo)

    const pagamento = await Pagamento.create({
      metodo: data.metodo,
      assentoId: assento.id,
      userId: user.id,
      codigo,
      qrcode: qrCode,
    })

    return await Pagamento
      .query()
      .where('id', pagamento.id)
      .preload('user')
      .preload('assento', (q) => {
        q.preload('viagem')
      })
      .first()
  }

  // MOSTRAR UM PAGAMENTO
  async show({ params }: HttpContext) {
    return await Pagamento
      .query()
      .where('id', params.id)
      .preload('user')
      .preload('assento', (q) => {
        q.preload('viagem')
      })
      .firstOrFail()
  }

  // ATUALIZAR
  async update({ params, request }: HttpContext) {
    const pagamento = await Pagamento.findOrFail(params.id)

    const data = request.only([
      'metodo',
      'codigo',
      'assentoId'
    ])

    pagamento.merge(data)

    await pagamento.save()

    return await Pagamento
      .query()
      .where('id', pagamento.id)
      .preload('user')
      .preload('assento', (q) => {
        q.preload('viagem')
      })
      .first()
  }

  // DELETAR
  async destroy({ params, response }: HttpContext) {
    const pagamento = await Pagamento.findOrFail(params.id)

    await pagamento.delete()

    return response.noContent()
  }
}