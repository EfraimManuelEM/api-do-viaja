import { BaseTransformer } from '@adonisjs/core/transformers'
import Adm from '#models/adm'

export default class AdmTransformer extends BaseTransformer<Adm> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'fullName',
      'email',
      'telefone',
      'bi',
      'role',
      'createdAt',
      'updatedAt',
      'initials',
    ])
  }
}