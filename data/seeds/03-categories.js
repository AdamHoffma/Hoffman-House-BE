exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('categories').insert([
      {
        name: "Chirstmas"
      },
      {
        name: "Decor"
      }
    ])    
  };
  