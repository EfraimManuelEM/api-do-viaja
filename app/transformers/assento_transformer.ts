import { BaseTransformer } from '@adonisjs/core/transformers'
import Assento from '#models/assento'

export default class AssentoTransformer extends BaseTransformer<Assento> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'assento',
      'viagemId',
    ])
  }
}