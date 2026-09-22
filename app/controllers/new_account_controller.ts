import User from '#models/user'
import { signupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'

export default class NewAccountController {
  async store({ request, serialize }: HttpContext) {
    const { fullName, email, telefone, bi } = await request.validateUsing(signupValidator)

    const user = await User.create({ fullName, email, telefone, bi })
    const token = await User.accessTokens.create(user)

    return serialize({
      user: UserTransformer.transform(user),
      token: token.value!.release(), 
    })
  }
  
  async index({}: HttpContext) {
    const users = await User.all()
    return users
  }

 async show({ params, response }: HttpContext) { 
    try {
      const user = await User.findOrFail(params.id) // Busca pelo ID vindo da URL (:id)
      return response.ok(user)
    } catch (error) {
      return response.notFound({ message: 'Usuário não encontrado' })
    }
  }

  async update({ request, auth, response }: HttpContext) {
    const user = await auth.authenticate()

    const data = request.only([
      'fullName',
      'email',
      'telefone',
      'password',
      'bi'
    ])

    // Atualiza campos básicos
    user.fullName = data.fullName
    user.email = data.email
    user.telefone = data.telefone
    user.bi = data.bi

    await user.save()

    return response.ok({
      message: 'Perfil atualizado',
      user,
    })
  }

   async destroy({ auth, response }: HttpContext) {
    try {
      const user = await auth.authenticate()  // pega o user logado
      await user.delete()
      return response.ok({ message: 'Conta eliminada com sucesso' })
    } catch (error) {
      return response.internalServerError({ message: 'Não foi possível deletar a conta' })
    }
  }
}
 