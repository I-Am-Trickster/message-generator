// Object to store output arrays
const menu = {
    mainCourse: ['fried rice', 'baked rice', 'chicken rice', 'kueh teow', 'singapore mee'],
    drink: ['water', 'ice lemon tea', 'milk oolong tea', 'milo', 'hot chocolate'],
    dessert: ['ice cream', 'tiramisu', 'chocolate cake', 'apple pie', 'chocolate chip cookie']
}

// Store selected menu items in an array
let outputItems = []

// Generate random number between 0 and num - 1
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}