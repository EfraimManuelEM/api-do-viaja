import { AdmSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})


export default class Adm extends compose(AdmSchema, AuthFinder) {
    
  static accesses = DbAccessTokensProvider.forModel(Adm, {
    table: 'accesses', // <-- aponta para a tua tabela
  })

  get initials() {
    const source = 
      this.fullName
        ? this.fullName
        : this.email
        ? this.email.split('@')[0]
        : this.telefone
        ? this.telefone
        : this.bi
        ? this.bi
        : this.role

    const [first, last] = source.split(' ')

    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }

    return `${first.slice(0, 2)}`.toUpperCase()
  }
}