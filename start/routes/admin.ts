import Route from '@ioc:Adonis/Core/Route'
import AuthController from 'App/Controllers/Http/AuthController'

Route.group(() => {
    // Admin group
    Route.get('/login', AuthController.loginPage).as('admin.login')
    Route.post('/login', AuthController.login).as('admin.login.store')

    Route.get('/forgot-password', AuthController.forgotPasswordPage).as('forgot-password')
    Route.post('/forgot-password', AuthController.forgotPassword).as('forgot-password.store')
    Route.get('/recover-password/:token', AuthController.recoverPasswordPage).as('recover-password')
    Route.post('/recover-password', AuthController.recoverPassword).as('recover-password.store')

    Route.group(() => {
        // Auth routes
        Route.any('/logout', AuthController.logout).as('logout')

        Route.get('/', async ({ view }) => {
            return view.render('admin/main')
        }).as('admin.main')

        Route.resource('users', 'UsersController').except(['show']).as('admin.users')
    }).middleware('auth')
}).prefix('admin')
