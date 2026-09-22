import { LeitorSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Pagamento from '#models/pagamento'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Leitor extends LeitorSchema {

    @belongsTo(() => Pagamento, {
        foreignKey: 'pagamentoId'
    })
    declare pagamento: BelongsTo<typeof Pagamento>

    get initials() {
        const source =  String(this.pagamentoId).split('')

        const [first, last] = source

        if (first && last) {
            return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
        }

        return first ? first.slice(0, 2).toUpperCase() : ''
    }
}