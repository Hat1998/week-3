"use strict";
exports.__esModule = true;
console.log("h");
var school = [
    {
        id: 0,
        name: "Ahmed",
        level: "first",
        isSenior: true
    },
    {
        id: 1,
        name: "Salem",
        level: "first",
        isSenior: true
    },
    {
        id: 2,
        name: "Ali",
        level: "first",
        isSenior: true
    }
];
function printStudents(arr) {
    for (var i = 0; i <= 3; i++) {
        var result = arr[i];
        console.log(result);
    }
}
printStudents(school);
