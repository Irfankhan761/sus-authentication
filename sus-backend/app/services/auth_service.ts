// app/Services/AuthService.ts
import env from '#start/env'
import User from '#models/user'
// import hash from '@adonisjs/core/services/hash'
// import jwt from 'jsonwebtoken'

interface RegisterPayload {
  userName: string
  email: string
  password: string
}

export default class AuthService {
  public static async register(payload: RegisterPayload) {
    // const hashedPassword = await hash.use('scrypt').make(payload.password)

    // const hashedPassword = await hash.make(payload.password)
    const user = await User.create({
      userName: payload.userName,
      email: payload.email,
      // password: hashedPassword,
      password: payload.password,
    })
    return user
  }
  public static async login(email: string, password: string) {
    console.log('Login route hit')
    try {
      const user = await User.verifyCredentials(email, password)
      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: env.get('JWT_EXPIRY', '1h'),
      })
      console.log('Token created:', token)
      return { token, user }
    } catch (error) {
      console.error('Error in login:', error)
      throw error
    }
  }

  // public static async login(email: string, password: string) {
  //   console.log('Login route hit')
  //   const user = await User.verifyCredentials(email, password)
  //   console.log('After verifyCredentials:', user)
  //   if (!user) {
  //     throw new Error('Invalid credentials')
  //   }
  //   console.log('Before creating token')
  //   const token = await User.accessTokens.create(user, ['*'], {
  //     expiresIn: env.get('JWT_EXPIRY', '1h'),
  //   })
  //   console.log('Token created:', token)
  //   return { token, user }
  // }
}
