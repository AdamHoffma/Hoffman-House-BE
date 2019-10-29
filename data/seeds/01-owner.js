
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owners').insert([
    {
      username: "Jlsza",
      password: "Annabelle"
    }
  ])
}
    