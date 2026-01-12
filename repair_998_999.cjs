const fs = require('fs');
const itemsPath = 'C:/Users/Destiny/Desktop/New folder/POG-Ultimate/rsc-data/config/items.json';
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

console.log('--- REPAIRING ITEM 998/999 ---');
if (items[998]) items[998].name = "Coat of Arms";
if (items[999]) items[999].name = "Coat of Arms";

fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));
console.log('Repair complete.');
