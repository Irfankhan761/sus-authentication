import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    userName: vine.string(),
    email: vine
      .string()
      .email()
      .unique(async (db, value, _field) => {
        const result = await db.from('users').select('id').where('email', value)
        return result.length ? false : true
      }),
    password: vine.string().minLength(4).maxLength(100).confirmed(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(4).maxLength(100),
  })
)
