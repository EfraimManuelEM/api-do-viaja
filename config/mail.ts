import env from '#start/env'
import { defineConfig, transports } from '@adonisjs/mail'

const mailConfig = defineConfig({
  default: 'smtp',

  from: {
    address: env.get('MAIL_FROM_ADDRESS'),
    name: env.get('MAIL_FROM_NAME'),
  },

  mailers: {
    smtp: transports.smtp({
      host: env.get('MAIL_HOST'),

      port: env.get('MAIL_PORT'),

      secure: env.get('MAIL_SECURE'),

      auth: {
        type: 'login',

        user: env.get('MAIL_USERNAME'),

        pass: env.get('MAIL_PASSWORD'),
      },
    }),
  },
})

export default mailConfig