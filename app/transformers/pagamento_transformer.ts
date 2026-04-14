import { BaseTransformer } from '@adonisjs/core/transformers'
import Pagamento from '#models/pagamento'

export default class PagamentoTransformer extends BaseTransformer<Pagamento> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'metodo',
      'codigo',
      'qrcode',
      'assentoId',
      'userId'
    ])
  }
} 