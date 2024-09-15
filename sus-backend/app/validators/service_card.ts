import vine from '@vinejs/vine'
export const serviceCardValidator = vine.compile(
  vine.object({
    image: vine.string().url(),
    heading: vine.string().maxLength(100),
    paragraph: vine.string().minLength(4),
  })
)
