import User from '#models/user'

import {
  requestCodeValidator,
  verifyCodeValidator,
} from '#validators/user'

import type { HttpContext } from '@adonisjs/core/http'

import UserTransformer from '#transformers/user_transformer'

import { randomInt } from 'node:crypto'

import { DateTime } from 'luxon'
import EmailService from '#services/mail_service'

export default class AccessTokenController {
  /**
   * POST /auth/code
   *
   * Envia código de confirmação
   * para o e-mail do usuário.
   */
  async requestCode({
    request,
    response,
  }: HttpContext) {
    const { email } =
      await request.validateUsing(
        requestCodeValidator
      )

    /**
     * Procura o usuário pelo e-mail.
     */
    const user =
      await User.findBy(
        'email',
        email
      )

    /**
     * Se não encontrar o usuário.
     */
    if (!user) {
      return response.notFound({
        message:
          'E-mail não cadastrado',
      })
    }

    /**
     * Gera código de 6 dígitos.
     */
    const code =
      randomInt(
        100000,
        1000000
      ).toString()

    /**
     * Código válido durante 5 minutos.
     */
    user.verificationCode = code

    user.verificationCodeExpiresAt =
      DateTime.now().plus({
        minutes: 5,
      })

    await user.save()

    try {
      /**
       * Envia o código para o
       * e-mail do próprio usuário.
       */
      await EmailService.sendVerificationCode(
        user.email,
        code
      )
    } catch (error) {
      console.error(
        'Erro ao enviar e-mail:',
        error
      )

      /**
       * Se o envio falhar,
       * remove o código.
       */
      user.verificationCode = null

      user.verificationCodeExpiresAt =
        null

      await user.save()

      return response.internalServerError({
        message:
          'Não foi possível enviar o código por e-mail',
      })
    }

    return response.ok({
      message:
        'Código de confirmação enviado para o seu e-mail',

      email: user.email,
    })
  }

  /**
   * POST /auth/veri
   *
   * Verifica o código enviado
   * para o e-mail.
   */
  async verifyCode({
    request,
    response,
    serialize,
  }: HttpContext) {
    const {
      email,
      code,
    } =
      await request.validateUsing(
        verifyCodeValidator
      )

    /**
     * Procura o usuário pelo e-mail.
     */
    const user =
      await User.findBy(
        'email',
        email
      )

    if (!user) {
      return response.notFound({
        message:
          'E-mail não cadastrado',
      })
    }

    /**
     * Verifica se existe código.
     */
    if (
      !user.verificationCode
    ) {
      return response.badRequest({
        message:
          'Nenhum código de confirmação foi solicitado',
      })
    }

    /**
     * Verifica se existe
     * data de expiração.
     */
    if (
      !user.verificationCodeExpiresAt
    ) {
      return response.badRequest({
        message:
          'Código inválido',
      })
    }

    /**
     * Verifica se o código expirou.
     */
    if (
      user.verificationCodeExpiresAt
        .toMillis() <
      DateTime.now().toMillis()
    ) {
      user.verificationCode = null

      user.verificationCodeExpiresAt =
        null

      await user.save()

      return response.badRequest({
        message:
          'Código expirado',
      })
    }

    /**
     * Verifica se o código
     * informado é correto.
     */
    if (
      user.verificationCode !==
      code
    ) {
      return response.badRequest({
        message:
          'Código incorreto',
      })
    }

    /**
     * Código correto.
     *
     * Remove o código para
     * impedir reutilização.
     */
    user.verificationCode = null

    user.verificationCodeExpiresAt =
      null

    await user.save()

    /**
     * Cria token de autenticação.
     */
    const token =
      await User.accessTokens.create(
        user
      )

    return serialize({
      user:
        UserTransformer.transform(
          user
        ),

      token:
        token.value!.release(),
    })
  }

  /**
   * GET /auth/me
   *
   * Retorna o usuário autenticado.
   */
  async me({
    auth,
    response,
  }: HttpContext) {
    await auth
      .use('api')
      .authenticate()

    const user =
      auth.user as User

    if (!user) {
      return response.unauthorized({
        error:
          'Não autenticado',
      })
    }

    return response.ok(
      UserTransformer.transform(
        user
      )
    )
  }
}