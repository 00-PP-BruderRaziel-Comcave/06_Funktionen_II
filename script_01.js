
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Division durch 0 nicht möglich"







// module: divide a / b | test
output(divide(12,4));
output(divide(12,-4));
output(divide(9,4));
output(divide(12,0));
output(divide(0,12));
function divide(a,b) {

	if (b == 0) {
		return ERROR_STR_DIV;
	}
	return a/b; // Regel
	// if (b != 0) {
	// 	return a/b;
	// } else {
	// 	return "divide durch 0 nicht mögich";
	// }
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
  