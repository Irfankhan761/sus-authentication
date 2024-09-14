import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'servicesdetails'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('serviceImage').nullable()
      table.string('serviceDetail', 255).notNullable()
      table.string('serviceHeading', 255).nullable()
      table.string('serviceDescription').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
