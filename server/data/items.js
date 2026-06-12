export const items = [
  ["1", "Wooden Dining Table", "Furniture", "A sturdy six-seat table with light wear.", "Cape Town"],
  ["2", "Children's Story Books", "Books", "A box of 20 illustrated books.", "Johannesburg"],
  ["3", "Electric Kettle", "Appliances", "Working 1.7 litre kettle.", "Pretoria"],
  ["4", "Mountain Bike", "Sports", "Adult bike needing a minor service.", "Durban"],
  ["5", "Winter Jackets", "Clothing", "Three warm jackets in medium sizes.", "Soweto"],
  ["6", "Desk Lamp", "Home", "Adjustable LED study lamp.", "Cape Town"],
  ["7", "Garden Tools", "Garden", "Spade, rake, and hand tools.", "Gqeberha"],
  ["8", "Computer Monitor", "Electronics", "24-inch HDMI monitor.", "Johannesburg"],
  ["9", "Baby Stroller", "Baby", "Foldable stroller in good condition.", "Pretoria"],
  ["10", "Ceramic Dinner Set", "Kitchen", "Dinner set for six people.", "Bloemfontein"],
  ["11", "Yoga Mat", "Sports", "Non-slip exercise mat.", "Durban"],
  ["12", "Office Chair", "Furniture", "Ergonomic chair with adjustable height.", "Cape Town"],
  ["13", "Board Games", "Toys", "Four family board games.", "Johannesburg"],
  ["14", "Microwave Oven", "Appliances", "Compact working microwave.", "Soweto"],
  ["15", "Plant Pots", "Garden", "Set of eight assorted plant pots.", "Pretoria"],
  ["16", "Coding Textbooks", "Books", "JavaScript and web development books.", "Cape Town"]
].map(([id, name, category, description, location]) => ({
  id,
  name,
  category,
  description,
  location,
  image: `https://placehold.co/600x400/2563eb/ffffff?text=${encodeURIComponent(name)}`,
  available: true,
  comments: []
}));
