/* 
# Exercise 3: Blast Off Countdown (while loop)

# Scenario: Simulate a rocket launch countdown.
- Task: Create a variable called counter and set it to 5.
- Rules:
	- Use a while loop that runs as long as counter is greater than 0.
	- Inside the loop, print the current value of counter and then decrease it by 1.
	- After the loop finishes entirely, print "Blast off! 🚀".
*/

var counter = 5
while ( counter > 0 ){
    console.log("Blast off in: "+counter)
    counter--
}
console.log("Blast off! 🚀")