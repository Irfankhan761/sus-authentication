import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Servicesdetail extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare service_image: string | null
  @column()
  declare service_detail: string
  @column()
  declare service_heading: string
  @column()
  declare service_description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
