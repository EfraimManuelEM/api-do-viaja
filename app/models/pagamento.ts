import { PagamentoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Assento from '#models/assento'
import User from '#models/user'

export default class Pagamento extends PagamentoSchema {

      @belongsTo(() => Assento, {
        foreignKey: 'assentoId'
      }) 
      declare assento: BelongsTo<typeof Assento>

      @belongsTo(() => User, {
        foreignKey: 'userId'
      }) 
      declare user: BelongsTo<typeof User>

    get initials() {
    const source = this.metodo
      ? this.metodo.split(' ')
      : this.codigo 
      ? this.codigo.split('')
      : this.qrcode
      ? this.qrcode.split('')
      : String(this.userId)
      ? String(this.userId).split('')
      : String(this.assentoId).split(' ')

    const [first, last] = source

    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }

    return first ? first.slice(0, 2).toUpperCase() : ''
  }
}