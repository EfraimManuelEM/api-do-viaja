import { ViagemSchema } from '#database/schema'

export default class Viagem extends ViagemSchema {
    get initials() {
        const source = 
        this.origem 
        ? this.origem.split('') 
        : this.destino 
        ? this.destino.split('')
        : this.data
        ? this.data.split('')
        : this.preco
        ? this.preco
        : this.tipo
        ? this.tipo
        : this.hora
        const [first, last] = source.toLocaleString(' ')

        if (first && last) {
            return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
        }
        return `${first.slice(0, 2)}`.toUpperCase()
    }
}  