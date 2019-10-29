
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shows').insert([
    {
      name: "RoundTop",
      locations: "Texas",
      date: 10/21/20,
      admission: 10,
      days: "Saturday and Sunday"
    }
  ])    
};
