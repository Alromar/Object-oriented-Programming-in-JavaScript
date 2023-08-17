//Gebleven bij: https://www.udemy.com/course/javascript-object-oriented-programming/learn/lecture/10019688#learning-tools  10.5

//Oject literals

//object with 3 members: 
//'radius', 'location', 'draw()'
//draw() => function => method
//'radius', 'location' => properties
// const circle = {
//     radius:1,
//     location: {
//         x:1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');

//     }
// };

//toegang tot object met dot-notatie





//object literal:
//object literal met method(object met gedrag) NIET handig om te kopiëren ivm bugs method

// const circle = {
//     radius:1,
//     location: {
//         x:1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');

//     }
// };

//ipv object literal een:
// factory function:

function createCircle(radius) {
    //radius:radius, in ES6 als key en value dito zijn, kun je enkel de key noemen  
    //  const circle  
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);


//factory function call -> circle.draw();

//constructor function:
//start uppercase
function Circle(radius) {
    //in de browser is 'this'het window-object' in Node is 'this'het global-object
    // console.log('this', this);
    this.radius = radius; //property - value;
    this.draw = function () { //method
        console.log('draw');
    }                  //this =  referentie naar object dat de code uitvoert 
}

//call constructor function 
const another = new Circle(1) //new operator creates empty object en selecteert het lege object voor 
//'this' en zorgt voor het lege object als return voor de function




//toegang tot object met dot-notatie
circle.draw();