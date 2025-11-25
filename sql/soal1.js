const db = require("./db");

console.log("=== Soal 1 ===");
console.log(
  "Tampilkan jumlah total order per customer, serta total quantity yang dibeli oleh masing-masing customer."
);

const QUERY = `
-- query dari sini

`;

const result = db.prepare(QUERY).all();
console.log(result);
