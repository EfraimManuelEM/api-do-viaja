import vine from '@vinejs/vine'

/**
 * Shared rules for email and password.
 */
const email = () => vine.string().email().maxLength(254)
const telefone = () => vine.string().minLength(9)
const bi = () => vine.string().maxLength(14)

/**
 * Validator to use when performing self-signup
 */
export const signupValidator = vine.create({
  fullName: vine.string().nullable(),
  email: email().unique({ table: 'users', column: 'email' }),
  telefone: telefone(),
  bi: bi()
})

/**
 * Validator to use before validating user credentials
 * during login
 */
export const loginValidator = vine.create({
  email: email(),
  telefone: telefone(),
})

export const requestCodeValidator =
  vine.compile(
    vine.object({
      email: vine
        .string()
        .trim()
        .email(),
    })
  )

export const verifyCodeValidator =
  vine.compile(
    vine.object({
      email: vine
        .string()
        .trim()
        .email(),

      code: vine
        .string()
        .trim()
        .fixedLength(6),
    })
  )