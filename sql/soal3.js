const db = require("./db");

console.log("=== Soal 3 ===");
console.log("Tampilkan customer dengan total belanja lebih dari 300000.");

const QUERY = `
-- query disini

`;

const result = db.prepare(QUERY).all();
console.log(result);
