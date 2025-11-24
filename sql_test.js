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

const stmt = db.prepare(`INSERT INTO orders VALUES (?, ?, ?, ?, ?)`);
stmt.run(1, "Alice", "Keyboard", 10, 200000);
stmt.run(2, "Bob", "Mouse", 12, 100000);
stmt.run(3, "Alice", "Monitor", 9, 150000);
stmt.run(4, "Bob", "Keyboard", 8, 200000);
stmt.run(5, "Alice", "Mouse", 11, 100000);

// ===================
// Soal 1: Total Belanja per Customer
// ===================
console.log("=== Soal 1: Total Belanja per Customer ===");
const totalPerCustomer = db
  .prepare(
    `
  
`
  )
  .all();
console.log(totalPerCustomer);

// ===================
// Soal 2: Top Product by Quantity
// ===================
console.log("\n=== Soal 2: Top Product by Quantity ===");
const topProduct = db
  .prepare(
    `    
  
   `
  )
  .all();
console.log(topProduct);
