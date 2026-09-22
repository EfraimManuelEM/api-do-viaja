import { BaseTransformer } from '@adonisjs/core/transformers'
import Leitor from '#models/leitor'

export default class LeitorTransformer extends BaseTransformer<Leitor> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'pagamentoId'
    ])
  }
}