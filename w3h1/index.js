var car1 = {
    make: 'Jaban',
    model: 'Camery',
    year: 2010
};
var car2 = {
    make: 'Jaban',
    model: 'Avalon',
    year: 2017
};
var car3 = {
    make: 'Germany',
    model: 'BMW',
    year: 2020
};
function honk(c1, c2, c3) {
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log("".concat(c1.model, " ").concat(c1.year));
    console.log("".concat(c2.model, " ").concat(c2.year));
    console.log("".concat(c3.model, " ").concat(c3.year));
}
honk(car1, car2, car3);
