

//Funciono protoipica: es una funcion que tiene por defecto cualquier variable segun el tipo de dato que contenga

//prototipo  es la plantilla que utiliza javascript para crear objetos,arrays.... 

//https://www.w3schools.com/jsref/jsref_obj_array.asp

//efecto lateral todo lo que altera nuestro codigo y viene de fuera (eje:una api,un promp)

// Array Methods prototipicas array

// Method	Description
// concat()	Joins two or more arrays, and returns a copy of the joined arrays
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	me hace la funcion anomima que le pongo a cada elemento del array //es como un for parecido
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	convierte de array a string fusionando toda la array ("para quitarle o cambiarle el separador entre comillas en la funcion ")
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	ordena los elementos del array de mayor a menor.por defecto utiliza strings(letras)
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array


// concat()	para  fusionar  dos arrays. ej 

                    // variable a
                    // varable b

                    // varable c = a.concat(b)

                    // ahora variable c = a+b

//


/////////////////////////////////////////////////////////////////////////




// String Methods prototipicas strings


// Method	Description
// charAt()	Returns the character at the specified index (position)
// charCodeAt()	Returns the Unicode of the character at the specified index
// concat()	Joins two or more strings, and returns a new joined strings
// endsWith()	Checks whether a string ends with specified string/characters
// fromCharCode()	Converts Unicode values to characters
// includes()	Checks whether a string contains the specified string/characters
// indexOf()	Returns the position of the first found occurrence of a specified value in a string
// lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
// localeCompare()	Compares two strings in the current locale

// match()	es como la search pero te devuelve la coincidencia exactamente.

// repeat()	Returns a new string with a specified number of copies of an existing string
// replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

// search()	Searches a string for a specified value, or regular expression, and returns the position of the match
                    //EJE:
                    //let frase = "la vida es como una caja de bombones"

                                //frase.search(/\W[a-z][a-z]\W/).
                        //te devuelve en que posicion esta la coincidenci.


// slice()	Extracts a part of a string and returns a new string
// split()	separa cada elemento de la array con separador caracter por caracter. ej = palabra = "palmera"   
                                                                                                // palabra.split("") 
                                                                                             //(7) ["p", "a", "l", "m", "e", "r", "a"]
// startsWith()	Checks whether a string begins with specified characters
// substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// substring()	Extracts the characters from a string, between two specified indices
// toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
// toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
// toLowerCase()	Converts a string to lowercase letters
// toString()	Returns the value of a String object
// toUpperCase()	Converts a string to uppercase letters
// trim()	Removes whitespace from both ends of a string
// valueOf()	Returns the primitive value of a String object



//RegExp : es un seudolenguaje para expresar un patron     //EJE:
                    //let frase = "la vida es como una caja de bombones"

  


//https://www.w3schools.com/jsref/jsref_obj_regexp.asp

//TODA REGEX CONTIENE 3 CARACTERES:

                    //metacaracteres cuantificadores y modificadores

                    //metacaracteres : es un caracter que se utiliza para bucar caracteres especiales.

                    //cuantificador : es un caracter o grupo en un regex que indica cuantas veces debe repetirse un metacaracter.

                    //ej:[0-9]{9}
                                
                    //indetificara los 9 numeros :625648097