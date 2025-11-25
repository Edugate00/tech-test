const db = require("./db");

console.log("=== Soal 2 ===");
console.log("Tampilkan nama produk dengan total quantity terbanyak.");

const QUERY = `
-- query disini

`;

const result = db.prepare(QUERY).all();
console.log(result);
