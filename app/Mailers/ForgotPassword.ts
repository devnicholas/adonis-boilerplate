import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'
import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import User from 'App/Models/User'

export default class ForgotPassword extends BaseMailer {
  constructor (private user: User) {
    super()
  }

  public prepare (message: MessageContract) {
    const url = Route.builder()
      .prefixUrl(Env.get('APP_URL'))
      .params({ token: this.user.rememberMeToken })
      .makeSigned('recover-password', { expiresIn: '1h'})

    message
      .subject('Recuperação de senha')
      .from('noreply@example.com')
      .to(this.user.email)
      .htmlView('emails/forgot-password', {
        name: this.user.name,
        url,
      })
  }
}
