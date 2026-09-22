import env from '#start/env'

const twilioConfig = {
  accountSid: env.get(
    'TWILIO_ACCOUNT_SID'
  ),

  authToken: env.get(
    'TWILIO_AUTH_TOKEN'
  ),

  verifyServiceSid: env.get(
    'TWILIO_VERIFY_SERVICE_SID'
  ),
}

export default twilioConfig