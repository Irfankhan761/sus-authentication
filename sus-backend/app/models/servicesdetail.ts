import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Servicesdetail extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare serviceImage: string | null
  @column()
  declare serviceDetail: string
  @column()
  declare serviceHeading: string
  @column()
  declare serviceDescription: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
