import vine from '@vinejs/vine'
export const serviceDetailValidator = vine.compile(
  vine.object({
    service_image: vine.string(),
    service_detail: vine.string(),
    service_heading: vine.string().maxLength(200),
    service_description: vine.string().minLength(10),
  })
)
