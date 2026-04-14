import Assento from '#models/assento'
import Pagamento from '#models/pagamento'
import type { HttpContext } from '@adonisjs/core/http'
import QRCode from 'qrcode'
import { randomUUID } from 'node:crypto'

export default class PagamentosController {

  // LISTAR PAGAMENTOS DO USUÁRIO
  async index({ auth }: HttpContext) {
    const user = await auth.authenticate()

    const pagamentos = await Pagamento
      .query()
      .where('user_id', user.id)
      .preload('assento', (assentoQuery) => {
        assentoQuery.preload('viagem')
      })

    return pagamentos
  }

  // CRIAR PAGAMENTO
  async store({ request, response, auth }: HttpContext) {
    // ✅ Autenticação adicionada
    const user = await auth.authenticate()

    const data = request.only([
      'metodo',
      'assentoId',
    ])

    // Validar dados
    if (!data.assentoId) {
      return response.badRequest({
        message: 'assentoId não enviado'
      })
    }

    // Garantir número
    const assentoId = Number(data.assentoId)

    // Procurar assento
    const assento = await Assento
      .query()
      .where('id', assentoId)
      .first()

    if (!assento) {
      return response.badRequest({
        message: 'Assento não encontrado'
      })
    }

    // Verificar se já existe pagamento para esse assento
    const assentoOcupado = await Pagamento
      .query()
      .where('assento_id', assento.id)
      .first()

    if (assentoOcupado) {
      return response.badRequest({
        message: 'Este assento já foi reservado'
      })
    }

    // ✅ Geração de código mais segura (sem colisões)
    const codigo = 'PAY163-' + randomUUID().split('-')[0].toUpperCase()

    // Gerar QR code
    const qrCode = await QRCode.toDataURL(codigo)

    // ✅ userId incluído para que index() encontre os registros
    const pagamento = await Pagamento.create({
      metodo: data.metodo,
      assentoId: assento.id,
      codigo: codigo,
      qrcode: qrCode,
      userId: user.id,
    })

    // Recarregar com preload para retornar objeto completo
    const pagamentoCarregado = await Pagamento
      .query()
      .where('id', pagamento.id)
      .preload('assento', (assentoQuery) => {
        assentoQuery.preload('viagem')
      })
      .first()

    return response.status(201).json(pagamentoCarregado ?? pagamento)
  }

  // MOSTRAR PAGAMENTO
  async show({ params }: HttpContext) {
    const pagamento = await Pagamento
      .query()
      .where('id', params.id)
      .preload('assento', (assentoQuery) => {
        assentoQuery.preload('viagem')
      })
      .firstOrFail()

    return pagamento
  }

  // ✅ ATUALIZAR PAGAMENTO — corrigido: nome em inglês + async adicionado
  async update({ params, request }: HttpContext) {
    const pagamento = await Pagamento.findOrFail(params.id)

    const data = request.only([
      'metodo',
      'codigo',
      'assentoId'
    ])

    pagamento.merge({
      metodo: data.metodo,
      codigo: data.codigo,
      assentoId: data.assentoId
    })

    await pagamento.save()

    // Recarregar com preload para retornar completo
    const atualizado = await Pagamento
      .query()
      .where('id', pagamento.id)
      .preload('assento', (q) => q.preload('viagem'))
      .first()

    return atualizado ?? pagamento
  }

  // DELETAR PAGAMENTO
  async destroy({ params, response }: HttpContext) {
    const pagamento = await Pagamento.findOrFail(params.id)

    await pagamento.delete()

    return response.status(204)
  }
}