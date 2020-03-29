
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('merchandise').insert([
    {
      image: "",
      description: "Candles",
      price: 10.00,
      weight: 10.4,
      quanity: 1,      
      category: "Christmas",
      name: "Candles",
      SKU: "102423"

    },
    {
      image: "",
      description: "Sign",
      price: 10.00,
      weight: 10.4,
      quanity: 1,    
      category: "Decor",     
      name: "Candles",
      SKU: "102423" 
    }
  ])    
};
