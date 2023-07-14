import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ auth, response, session }: HttpContextContract, next: () => Promise<void>) {
    if(auth.isLoggedIn && auth.user?.isAdmin){
      await next()
    } else{
      session.flash('error', 'Unauthorized access')
      return response.redirect().back()
    }
  }
}
