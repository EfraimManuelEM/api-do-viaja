import User from '#models/user'
import { loginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class AccessTokenController {
  async store({ request, serialize }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(),
    })
  }

// AccessTokenController.ts

async me({ auth, response }: HttpContext) {
  await auth.check()
  const user = auth.user 

  if (!user) {
    return response.unauthorized({ error: 'Não autenticado' })
  }

  // Use o transformer para garantir que o formato seja igual ao do login
  return response.ok(UserTransformer.transform(user))
}
}
