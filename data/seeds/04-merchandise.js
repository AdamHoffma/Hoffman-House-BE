
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('merchandise').insert([
    {
      image: "",
      description: "Candles",
      price: 10.00,
      weight: 10.4,
      quanity: 1,
      categories_id: 1,
      category: "Christmas"      
    },
    {
      image: "",
      description: "Sign",
      price: 10.00,
      weight: 10.4,
      quanity: 1,
      categories_id: 2,
      category: "Decor"      
    }
  ])    
};
