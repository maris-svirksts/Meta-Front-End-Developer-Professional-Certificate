// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var i of dairy) {
        console.log(i)
    }
}

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (k of Object.keys(bird)) {
        console.log(`${k}: ${bird[k]}`)        
    }
}

// Task 3
function animalCan() {
    for (k in bird) {
        console.log(`${k}: ${bird[k]}`) 
    }
}