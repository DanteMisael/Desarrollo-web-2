function removeChar(theString: string, theChar: string): string {
    let theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}
/*¨La siguiente función es el equivalente en generico a la anterior
sin embarco, replace no funciona para el tipo T
function removeIt<T>(theInput: T, theIt: string): T {
    /*Regex crea un objeto de expresión regular que 
        encuentra texto de acuerdo a un patrón      
    let theRegex = new RegExp(theIt, "gi"); 
    return theInput.replace(theRegex, '');
}                                                               */
    