import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(UserSchema, AuthFinder) {
  
  // 🔐 ATIVA API TOKENS
  static accessTokens = DbAccessTokensProvider.forModel(User)

  get initials() {
    const source = 
      this.fullName
        ? this.fullName
        : this.email
        ? this.email.split('@')[0]
        : this.telefone

    const [first, last] = source.split(' ')

    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }

    return `${first.slice(0, 2)}`.toUpperCase()
  }
}