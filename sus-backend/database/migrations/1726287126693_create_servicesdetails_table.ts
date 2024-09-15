import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'servicesdetails'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('service_image').nullable()
      table.string('service_detail', 255).notNullable()
      table.string('service_heading', 255).nullable()
      table.string('service_description', 1000).notNullable()

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
