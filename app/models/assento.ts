import { AssentoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Viagem from '#models/viagem'

export default class Assento extends AssentoSchema {

  @belongsTo(() => Viagem, {
    foreignKey: 'viagemId'
  })
  declare viagem: BelongsTo<typeof Viagem>


  get initials() {
    const source = this.assento
      ? this.assento.split(' ')
      : String(this.viagemId).split(' ')

    const [first, last] = source

    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }

    return first ? first.slice(0, 2).toUpperCase() : ''
  }

}