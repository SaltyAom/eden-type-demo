import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .setModel({
        sign: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .post('/sign-in', ({ body }) => body, {
        schema: {
            body: 'sign'
        }
    })
    .listen(8080)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
