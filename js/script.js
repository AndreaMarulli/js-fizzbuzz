// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 
 
for ( let i = 0; i <= 100; i++) {
    let fizzBuzz = i
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = "fizzBuzz"; 
    } else if (i % 3 ===0) {
        fizzBuzz = "fizz";
    } else if (i % 5 ===0) {
        fizzBuzz = "buzz";
    } 
    console.log(fizzBuzz);
}