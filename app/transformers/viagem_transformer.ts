import { BaseTransformer } from '@adonisjs/core/transformers'
import Viagem from '#models/viagem'

export default class ViagemTransformer extends BaseTransformer<Viagem> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'origem',
      'destino',
      'preco',
      'data',
      'createdAt',
      'updatedAt',
    ])
  }
}