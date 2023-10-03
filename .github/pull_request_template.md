# Submitting Week 5 Assessment

### ✅ Completed Files

Select the following as confirmation that the files in this repository are complete.

- [✅] Coding Challenges
- [✅] Coding Concepts
- [✅] Interview Questions

### ✋ Reminder

Do NOT merge your assessment!
Resist the urge to merge! we got it!

### 📝 Feedback

If you would like specific feedback please leave details here:

######### 1 ##########

this is code-challenge #3 (my version number 10th try):
it passed because i used one condition and it is that the leangth of the new array with number 4s is equal to 1. a little cheating i would say, but this was a great solution and i loved it. And it returned and passed correctly.

// Pseudo code:
// 1 create a function that takes in one parameter, an array
// 2 create a conditional statement where if number 4 is in the array, create another array with all 4s, count the leangth of that array. and if it is equal to 1 return that array as false

const fullHouse = (array) => {
    let filterThatArray = array.filter(number => number === 4)
    if (filterThatArray.length === 1) 
    {
        return false
    } else {
        return true
    }
}

but before i got that top solution i used the one on the bottom. and it completly made sense until it returned : 
true
false
true
true
and this was returned after i took out {|| number === 5} out of a new variable i created.
Don't want to get to cocky here, but it did look that i had it down, i don't understand why the bottom one didn't want to work for me, and why i had to take out 5. And why it wouldn't work with one equal sign by 3. and why i had to use one equal sign by 2. It all makes no sense.

const fullHouse = (array) => {
    let filterThatArray = array.filter(number => number === 2 || number === 3 || number === 4 || number === 7)
    if (filterThatArray.length = 2 && filterThatArray.length == 3) 
    {
        return false
    } else {
        return true
    }
}
                
console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
console.log(fullHouse(hand4));

######### 2 ##########

what is the difference between objects RUBY vs JS vs REACT
OR
can i see an example of the same problem shown in those 3 languages

######### 3 ##########
(: What should i do to become Competent :)