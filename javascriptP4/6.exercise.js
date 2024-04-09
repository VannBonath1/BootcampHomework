const items = [
  { name: "Bread", category: "Grocery" },
  { name: "Butter", category: "Grocery" },
  { name: "Shampoo", category: "Personal Care" },
];

const groupedItems = items.reduce((acc, item) => {
  const { category, name } = item;
  acc[category] = acc[category] || [];
  acc[category].push(name);
  return acc;
}, {});

console.log(groupedItems);

/*
Output:
{
  "Grocery": ["Bread", "Butter"],
  "Personal Care": ["Shampoo"]
}
*/
