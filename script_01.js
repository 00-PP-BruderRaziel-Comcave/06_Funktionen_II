
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/



// module: division a / b | test
output(division(12,4));
output(division(12,-4));
output(division(9,4));
output(division(12,0));
function division(a,b) {
	return a / b;
}

// module: multiplication a * b | test
// output(multiplication(3,4));
// output(multiplication(3,-4));
// output(multiplication(3,0));
function multiplication(a,b) {
	return a * b;
}


// module: subtraction a - b | test
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
function subtract(a,b) {
	return a - b;
}


// module: addition a + b | Test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  