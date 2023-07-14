// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import { string } from '@ioc:Adonis/Core/Helpers'
import ForgotPassword from 'App/Mailers/ForgotPassword'

export default class AuthController {
  public static async loginPage ({ view }) {
    return view.render('admin/auth/login')
  }

  public static async login ({ request, auth, response }) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.attempt(email, password)
    return response.redirect().toRoute('admin.main')
  }

  public static async logout ({ auth, response }) {
    await auth.logout()

    return response.redirect().toRoute('admin.login')
  }

  public static async forgotPasswordPage ({ view }) {
    return view.render('admin/auth/forgot-password')
  }
  public static async forgotPassword ({ request, response, session }) {
    const email = request.input('email')
    const user = await User.query().where('email', email).first()

    if (user) {
      user.rememberMeToken = string.generateRandom(32)
      await user.save()
      await new ForgotPassword(user).send()
    }
    session.flash('success',
      'Caso o e-mail exista em nossa base, você receberá um e-mail com instruções para redefinir sua senha'
    )
    return response.redirect().toRoute('forgot-password')
  }

  public static async recoverPasswordPage ({ response, params, view }) {
    const token = params.token
    const user = await User.query().where('rememberMeToken', token).first()

    if(!user) {
      return response.redirect().toRoute('forgot-password')
    }
    return view.render('admin/auth/recover-password', { token })
  }

  public static async recoverPassword ({ request, response, session}) {
    const { token, password } = request.only(['token', 'password'])
    const user = await User.query().where('rememberMeToken', token).first()

    if(!user) {
      return response.redirect().toRoute('forgot-password')
    }
    user.password = password
    await user.save()

    session.flash('success', 'Senha alterada com sucesso')
    return response.redirect().toRoute('admin.login')
  }
}
