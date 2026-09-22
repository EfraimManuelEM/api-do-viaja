import mail from '@adonisjs/mail/services/main'
import env from '#start/env'

export default class EmailService {
  /**
   * Envia o código de confirmação
   * para o e-mail do usuário.
   */
  static async sendVerificationCode(
    email: string,
    code: string
  ) {
    await mail.send((message) => {
      message
        .to(email)
        .from(
          env.get('MAIL_FROM_ADDRESS'),
          env.get('MAIL_FROM_NAME')
        )
        .subject('Código de confirmação - Bilhete')
        .html(`
          <!DOCTYPE html>

          <html lang="pt">

          <head>
            <meta charset="UTF-8">

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            >

            <title>Código de confirmação</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              font-family: Arial, Helvetica, sans-serif;
            "
          >

            <div
              style="
                max-width: 520px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 12px;
                padding: 30px;
              "
            >

              <div
                style="
                  text-align: center;
                  margin-bottom: 30px;
                "
              >
                <h1
                  style="
                    margin: 0;
                    color: #f97316;
                    font-size: 32px;
                  "
                >
                  Bilhete
                </h1>
              </div>


              <h2
                style="
                  color: #222222;
                "
              >
                Código de confirmação
              </h2>


              <p
                style="
                  color: #555555;
                  font-size: 16px;
                  line-height: 1.6;
                "
              >
                Olá!
              </p>


              <p
                style="
                  color: #555555;
                  font-size: 16px;
                  line-height: 1.6;
                "
              >
                Recebemos uma solicitação de acesso
                à sua conta no Bilhete.
              </p>


              <p
                style="
                  color: #555555;
                  font-size: 16px;
                  line-height: 1.6;
                "
              >
                O seu código de confirmação é:
              </p>


              <div
                style="
                  text-align: center;
                  margin: 30px 0;
                "
              >

                <span
                  style="
                    display: inline-block;
                    background-color: #f97316;
                    color: #ffffff;
                    padding: 18px 30px;
                    border-radius: 10px;
                    font-size: 32px;
                    font-weight: bold;
                    letter-spacing: 8px;
                  "
                >
                  ${code}
                </span>

              </div>


              <p
                style="
                  color: #555555;
                  font-size: 15px;
                  line-height: 1.6;
                "
              >
                O código expira em
                <strong>5 minutos</strong>.
              </p>


              <p
                style="
                  color: #555555;
                  font-size: 15px;
                  line-height: 1.6;
                "
              >
                Se não solicitaste este código,
                simplesmente ignora este e-mail.
              </p>


              <hr
                style="
                  border: none;
                  border-top: 1px solid #eeeeee;
                  margin: 30px 0;
                "
              />


              <p
                style="
                  text-align: center;
                  color: #999999;
                  font-size: 12px;
                "
              >
                Bilhete
                <br>
                Sistema de viagens
              </p>

            </div>

          </body>

          </html>
        `)
    })
  }
}