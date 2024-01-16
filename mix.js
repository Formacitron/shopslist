const fs = require('fs');

const positions = JSON.parse(fs.readFileSync("./selection.json"));
const names = JSON.parse(fs.readFileSync("./names.json"));
const shops = [];
// [{"id":92,"department_code":"01","insee_code":"01098","zip_code":"01300","name":"Chazey-Bons","slug":"chazey bons","gps_lat":45.802649,"gps_lng":5.681342},
for (const key in positions) {
  const shop = {...positions[key]};
  shop.city = shop.name;
  shop.name = names[key];
  delete shop.insee_code;
  delete shop.slug;
  delete shop.department_code;
  shops.push(shop)
}

fs.writeFileSync("shops.json", JSON.stringify(shops),"utf8")
