let demo = document.getElementById('demo');
let knop = document.getElementById('knop');


demo.innerHTML = 'Eerste tekst van Alex!';

knop.onclick = function () {
    console.log('Hallo!');
}

// encapsulation

let baseSalary = 30_000;
let overtime = 10; 
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

let employee = { 
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

console.log(employee.getWage());

// abstraction : https://www.udemy.com/course/javascript-object-oriented-programming/learn/lecture/10019568#learning-tools  3:31