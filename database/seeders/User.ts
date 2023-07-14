import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      name: 'Admin',
      email: 'admin@mail.com',
      password: '123123',
      role: 'admin',
    })
  }
}
