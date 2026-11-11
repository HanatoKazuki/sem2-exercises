/*
# Exercise 2: Counting Even Numbers (for loop + if)

# Scenario: You need to list out numbers, but you only want to highlight the even ones.
- Task: Write a for loop that counts from 1 up to 10 (inclusive).
- Rules:
  - Inside the loop, use an if statement and the remainder operator (%) to check if the current number is even.
  - Print only the even numbers to the console (2, 4, 6, 8, 10).
*/

// Loop From 1 to 10
for (i=1;i<=10;i++){
    console.log(i)
};
console.log("")
//Even Number
for (i=1;i<=10;i++){
    if (i%2==0){
        console.log(i)
    };
}