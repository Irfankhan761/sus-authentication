import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Servicescard extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare image: string | null

  @column()
  declare heading: string

  @column()
  declare paragraph: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
