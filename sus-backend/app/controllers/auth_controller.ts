// app/Controllers/Http/AuthController.ts
import type { HttpContext } from '@adonisjs/core/http'
import AuthService from '#services/auth_service'
import { registerValidator } from '#validators/auth'
import { loginValidator } from '#validators/auth'

export default class AuthController {
  public async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await AuthService.register(payload)
    return response.status(201).json(user)
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const { token, user } = await AuthService.login(email, password)
    return response.ok({
      token: token,
      ...user.serialize(),
    })
  }
}
