// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("letsMakeItUnreadable", () => {

    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    
  
    it("takes in a string of letters and converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      expect(letsMakeItUnreadable(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(letsMakeItUnreadable(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(letsMakeItUnreadable(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

// b) Create the function that makes the test pass.

// Pseudo code:

// INPUT: a string of letters
// OUTPUT: a string with a coded message
// FUNCTION: name letsMakeItUnreadable with a passed in parameter thing
// PROCESS:
// 1) create a function and pass in one parameter that will recognize array
// 2) split the array and map through it, for to itirate and evaluate each value
// 3) create a condition where value is replaced from letters to numbers
// 4) join('') the result and recieve a readable string. BadaBimBadaBoom!!!!

const letsMakeItUnreadable = (thing) => {
    return thing.split('').map((value) => {
        return value.replace("a", 4).replace("A", 4).replace("e", 3).replace("E", 3).replace("i",  1 ).replace("I", 1).replace("o",  0 ).replace("O", 0)
    }).join('')
} 


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letsMakeItUnreadable", () => {
    
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    
    const filterLetterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
  
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
      expect(filterIt(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(filterIt(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })


// b) Create the function that makes the test pass.

// Pseudo code:

// INPUT: an array of words, and a string with a letter
// OUTPUT: and array of words in the string that correspond with a passed in letter
// FUNCTION: name filterIt with 2 parameters array and letter
// PROCESS:
// 1) create a function that takes will be able to take in 2 arguments
// 2) map through the first parameter
// 3) create a conditional statement if value inclueds the 2nd parameter return it
// 4) since this will return the entire array with true & unidentifed values we filter the outcome to return only boolean values. BadaBimBadaBoom!!!!

const filterIt = (array, letter) => {
    return array.map((value) => {
        if (value.toLowerCase().includes(letter) === true ){
            return value
        } 
    }).filter(Boolean)
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("letsMakeItUnreadable", () => {
    
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    
  
    it("in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
  })

// b) Create the function that makes the test pass.

// Pseudo code:

// INPUT: array of numbers
// OUTPUT: if the argument is true =true, and if not = false
// FUNCTION: name fullHouse with parameter array
// PROCESS:
// 1) create a function that takes in one parameter, an array
// 2) create a code block that will take in the count
// 3) create a for loop that will itirate through the array
// 4) create a conditional statement if value = value add to counter the number of times is found it
// 5) else the one time just return that one time occuered occurance
// 6) create new Variable = birings object with counted times of each value
// 7) return array when object includes 2 && 3

const fullHouse = (arr) => {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]]) {
        counts[arr[i]]++;
      } else {
        counts[arr[i]] = 1;
      }
    }
    const values = Object.values(counts);
    return values.includes(3) && values.includes(2);
  }