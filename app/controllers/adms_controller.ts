import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash' 
import AdmTransformer from '#transformers/adm_transformer'
import Adm from '#models/adm'
import { signupValidator } from '#validators/adm'

export default class AdmsController {
    async store({ request, serialize }: HttpContext) {
    const { fullName, email, password, role, telefone, bi } = await request.validateUsing(signupValidator)
    
    const adm = await Adm.create({ fullName, email, password, role, telefone, bi })
    const token = await Adm.accesses.create(adm)
    
    return serialize({
        adm: AdmTransformer.transform(adm),
        token: token.value!.release(), 
    })
 }

    async index({}: HttpContext) {
     const adms = await Adm.all()
     return adms
   }

    async show({ params, response }: HttpContext) { 
       try {
         const adm = await Adm.findOrFail(params.id) // Busca pelo ID vindo da URL (:id)
         return response.ok(adm)
       } catch (error) {
         return response.notFound({ message: 'Usuário não encontrado' })
       }
    }

    async update({ request, auth, response }: HttpContext) {
    const adm = await auth.use('admin').authenticate()

    const data = request.only([
      'fullName',
      'email',
      'telefone',
      'password',
      'bi'
    ])

    // Atualiza campos básicos
    adm.fullName = data.fullName
    adm.email = data.email
    adm.telefone = data.telefone
    adm.bi = data.bi

    // Atualiza senha se enviada
    if (data.password) {
      adm.password = await hash.make(data.password)
    }

    await adm.save()

    return response.ok({
      message: 'Perfil atualizado',
      adm,
    })
  }

    async destroy({ auth, response }: HttpContext) {
    try {
      const adm = await auth.use('admin').authenticate()
      await adm.delete()
      return response.ok({ message: 'Conta eliminada com sucesso' })
    } catch (error) {
      return response.internalServerError({ message: 'Não foi possível deletar a conta' })
    }
  }
}