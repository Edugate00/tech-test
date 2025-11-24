// SOAL 1: Palindrome
// Contoh: "level" => true, "hello" => false
function isPalindrome(str) {
  // TODO: implement here
}

// SOAL 2: Hitung Frekuensi Karakter
// Contoh: "banana" => { b:1, a:3, n:2 }
function charFrequency(str) {
  // TODO: implement here
}

// SOAL 3: Filter Angka Genap
// Contoh: [1,2,3,4,5,6] => [2,4,6]
function getEvenNumbers(arr) {
  // TODO: implement here
}

// SOAL 4: FizzBuzz
// - Jika angka habis dibagi 3: "Fizz"
// - Jika angka habis dibagi 5: "Buzz"
// - Jika habis dibagi 3 dan 5: "FizzBuzz"
// - Selain itu: angka itu sendiri
function fizzBuzz(n) {
  // TODO: implement here
}

// SOAL 5: Call API
async function callAPI() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  // TODO: implement here
}

// =====================
// TEST OUTPUT
// =====================
console.log("Palindrome Test:", isPalindrome("level"));
console.log("Frequency Test:", charFrequency("banana"));
console.log("Even Numbers Test:", getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("FizzBuzz Test:");
console.log(fizzBuzz(15));
console.log("Call API Test:");
callAPI();
