const Database = require("better-sqlite3");
const db = new Database(":memory:");

db.exec(`
  CREATE TABLE orders (
    id INTEGER,
    customer_name TEXT,
    product TEXT,
    quantity INTEGER,
    price INTEGER
  );
`);

const data = [
  [1, "Alice", "Keyboard", 2, 200000],
  [2, "Bob", "Mouse", 1, 100000],
  [3, "Alice", "Monitor", 1, 150000],
  [4, "Charlie", "Keyboard", 1, 200000],
  [5, "Bob", "Monitor", 2, 150000],
  [6, "Alice", "Mouse", 1, 100000],
  [7, "Dave", "Chair", 4, 50000],
  [8, "Charlie", "Mouse", 3, 100000],
  [9, "Eve", "Keyboard", 1, 200000],
  [10, "Bob", "Chair", 2, 50000],
];

const stmt = db.prepare(`INSERT INTO orders VALUES (?, ?, ?, ?, ?)`);
for (const row of data) stmt.run(...row);

// Soal 1 — Total Belanja per Customer
console.log("=== Soal 1: Total Belanja per Customer ===");
const soal1 = db
  .prepare(
    `
 
`
  )
  .all();
console.log(soal1);

// Soal 2 — Top Product by Quantity
console.log("\n=== Soal 2: Top Product by Quantity ===");
const soal2 = db
  .prepare(
    `
  
`
  )
  .all();
console.log(soal2);

// Soal 3 — Customers Spending > 300000
console.log("\n=== Soal 3: Customers Spending > 300000 ===");
const soal3 = db
  .prepare(
    `
  
`
  )
  .all();
console.log(soal3);
