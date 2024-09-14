import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Servicescard extends BaseSchema {
  protected tableName = 'servicescards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('image', 255).nullable()
      table.string('heading', 255).notNullable()
      table.text('paragraph').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
