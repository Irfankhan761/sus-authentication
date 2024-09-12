// app/Services/AuthService.ts
import env from '#start/env'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
// import jwt from 'jsonwebtoken'

interface RegisterPayload {
  userName: string
  email: string
  password: string
}

export default class AuthService {
  public static async register(payload: RegisterPayload) {
    const hashedPassword = await hash.make(payload.password)
    const user = await User.create({
      userName: payload.userName,
      email: payload.email,
      password: hashedPassword,
    })
    return user
  }
  public static async login(email: string, password: string) {
    const user = await User.verifyCredentials(email, password)
    if (!user) {
      throw new Error('Invalid credentials')
    }
    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: env.get('JWT_EXPIRY', '1h'),
    })
    return { token, user }
  }
}

// public static async login(email: string, password: string) {
//   const user = await User.verifyCredentials(email, password)
//   if (!user) {
//     throw new Error('Invalid credentials')
//   }

//   const token = jwt.sign(
//     { id: user.id, email: user.email }, // Payload
//     env.get('APP_KEY'), // Secret key from your environment variables
//     { expiresIn: env.get('JWT_EXPIRY', '1h') } // Expiry time
//   )

//   return { token, user }
// }
