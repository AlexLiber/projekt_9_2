// project 9.2

var femaleNames = ['Asia', 'Basia', 'Kasia', 'Zosia'],
    maleNames = ['Arek', 'Darek', 'Jarek', 'Marek'],
    allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Czarek';
    if (allNames.indexOf(newName) === -1) {
        var howManyNames = allNames.push(newName);
    }
console.log(allNames);
console.log(howManyNames);

/* here is how I checked it:

var newName = 'Darek';
    if (allNames.indexOf(newName) === -1) {
        var howManyNames = allNames.push(newName);
    }
console.log(allNames);
console.log(howManyNames);

var newName = 'Gosia';
    if (allNames.indexOf(newName) === -1) {
        var howManyNames = allNames.push(newName);
    }
console.log(allNames);
console.log(howManyNames);
*/