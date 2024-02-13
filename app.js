// Array Pop, fjerner det sidste element i et array og returnerer det 
let popArray = ['a', 'b', 'c'];
console.log(popArray.pop());

// Array push, tilføjer et element til sidst i et array
let pushArray = ['a', 'b', 'c'];
console.log(pushArray);
pushArray.push('d');
console.log(pushArray)

// Array shift, fjerner det første element i et array og returnerer det 
let shiftArray = ['a', 'b', 'c'];
console.log(shiftArray.shift());

// Array unshift, tilføjer et element først i et array
let unshiftArray = ['a', 'b', 'c'];
console.log(unshiftArray);
unshiftArray.unshift('d');
console.log(unshiftArray)

// Array Slice splitter et array, hvor det første tal er start punktet, 
// det vil sige, at alle elementer i arrayet før index nr. 1 er fjernet, 
// og så viser den alle elementer til men ikke med slut punktet. 
// I dette eksempel viser den alle elementer med index fra 1-3
let sliceArray = ['a', 'b', 'c', 'd', 'e'];
console.log(sliceArray.slice(1, 4));

// For each udfører en funktion en gang per element i et array
let forEachArray = ['a', 'b', 'c']
forEachArray.forEach((element) =>  console.log(element));