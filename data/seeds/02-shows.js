
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shows').insert([
    {
      name: "RoundTop",
      location: "Texas",
      date: 102120,
      admission: 10,
      days: "Saturday and Sunday"
    }
  ])    
};
