import Adm from '#models/adm'
import { loginValidator } from '#validators/adm'
import type { HttpContext } from '@adonisjs/core/http'

export default class AccessesController {

  async store({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const adm = await Adm.verifyCredentials(
      email,
      password
    )

    const token = await Adm.accesses.create(adm)

    return response.ok({
      token: token.value!.release(),

      adm: {
        id: adm.id,
        fullName: adm.fullName,
        email: adm.email,
      },
    })
  }

  /**
   * USUÁRIO AUTENTICADO
   */
  async me({ auth, response }: HttpContext) {
    try {
      const adm = auth.getUserOrFail()

      return response.ok({
        authenticated: true,

        adm: {
          id: adm.id,
          fullName: adm.fullName,
          email: adm.email,
          createdAt: adm.createdAt,
          updatedAt: adm.updatedAt,
        },
      })
    } catch (error) {
      console.error(
        'Erro ao buscar usuário autenticado:',
        error
      )

      return response.unauthorized({
        authenticated: false,
        message: 'Usuário não autenticado',
      })
    }
  }

}