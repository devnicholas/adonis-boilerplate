# Adonis Boilerplate
This is a boilerplate for AdonisJS with this features:

- Admin inteface baseed on [Windmill](https://github.com/estevanmaito/windmill-dashboard)
- [TailwindCSS](https://tailwindcss.com/)
- [AlpineJS](https://alpinejs.dev/)
- Icons by [Heroicons](https://heroicons.dev/)
- Authentication system
- Users CRUD
- Forgot Password
- Users roles (admin and member)

## Setup
Install dependencies
```bash
npm install | yarn
```

Copy and rename the file .env.example to .env and change the configurations


### Migrations

Run the following command to run startup migrations and seeders.

```js
node ace migration:run
```

```js
node ace db:seed
```

### Running

Start the app locally

```js
npm run dev | yarn dev
```

### Accessing

On `http://127.0.0.1:3333/admin/login` enter this authentication access for main user:

User: admin@mail.com
Password: 123123
