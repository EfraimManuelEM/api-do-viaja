import vine from '@vinejs/vine'

const email = () => vine.string().email().maxLength(254)
const password = () => vine.string().minLength(8).maxLength(32)
const telefone = () => vine.string().minLength(9)
const bi = () => vine.string().maxLength(14)
const role = () => vine.string()

export const signupValidator = vine.create({
  fullName: vine.string().nullable(),
  email: email().unique({ table: 'adms', column: 'email' }),
  password: password(),
  passwordConfirmation: password().sameAs('password'),
  telefone: telefone(),
  bi: bi(),
  role: role()
})

export const loginValidator = vine.create({
  email: email(),
  password: vine.string(),
})