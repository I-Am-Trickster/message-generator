// Object to store output arrays
const menu = {
    mainCourse: ['fried rice', 'baked rice', 'chicken rice', 'kueh teow', 'singapore mee'],
    drink: ['water', 'ice lemon tea', 'milk oolong tea', 'milo', 'hot chocolate'],
    dessert: ['ice cream', 'tiramisu', 'chocolate cake', 'apple pie', 'chocolate chip cookie']
}

// Store selected menu items in an array
let outputItems = [];

// Generate random number between 0 and num - 1
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

// Iterate over the object
for (let item in menu) {
    let randomIndex = generateRandomNumber(menu[item].length);

    switch (item) {
        case 'mainCourse':
            outputItems.push(`For your main course, you should order ${menu[item][randomIndex]}.`);
            break;
        case 'drink':
            outputItems.push(`Feeling thirsty? You should drink ${menu[item][randomIndex]}.`);
            break;
        case 'dessert':
            outputItems.push(`To finish your meal, you should eat ${menu[item][randomIndex]} for dessert.`);
            break;
        default:
            outputItems.push('Unable to choose what you should eat/drink');
    }
}