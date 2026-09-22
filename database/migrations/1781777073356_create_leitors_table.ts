import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'leitors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('pagamento_id').unsigned().references('id').inTable('pagamentos').onDelete('CASCADE')
    })
  }
 
  async down() {
    this.schema.dropTable(this.tableName)
  }
}