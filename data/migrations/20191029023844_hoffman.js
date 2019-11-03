
exports.up = function(knex) {
    return knex.schema.createTable('owners', owners => {
        owners.increments()
        owners
            .string('username')
            .notNullable()
            .unique()
        owners.string('password')
    })
    .createTable('shows', shows => {
        shows.increments()
        shows
            .string('name')
            .notNullable(),
        shows
            .string('location')
            .notNullable(),
        shows
            .date('date')
            .notNullable(),
        shows
            .integer('admission'),
        shows
            .string('days')
               
    })
    .createTable('categories', categories => {
        categories.increments()
        categories
            .string('name')      
        
    })
    .createTable('merchandise', merchandise => {
        merchandise.increments()
        merchandise
            .string('image')
        merchandise
            .string('category')
            .notNullable()
        merchandise
            .string('description', 500),
        merchandise
            .decimal('price', null)
        merchandise
            .decimal('weight', null)
        merchandise
            .integer('quanity')
        merchandise
            .integer('categories_id')
            .unsigned()
            .references('id')
            .inTable('categories')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}
   

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('owners')
    .dropTableIfExists('shows')
    .dropTableIfExists('merchandise')
    .dropTableIfExists('categories')
};
