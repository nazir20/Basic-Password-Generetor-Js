/*
* @about varibles:
* All variables must be identified with unique names. These unique names are called identifiers.
* Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
* The general rules for constructing names for variables (unique identifiers) are:
*** Names can contain letters, digits, underscores, and dollar signs.
*** Names must begin with a letter
*** Names can also begin with $ and _ 
*** Names are case sensitive (y and Y are different variables)
*** Reserved words (like JavaScript keywords) cannot be used as names
*
*/
function isValidVarible(variable){
    try {
        if(variable.length === 0) throw 'No value entered'
        else{
            const arr = toArray(variable)
            checkValidate(arr)
        }
    } catch (error) {
        console.log('Error: ' + error);
    }
}
/*
*
* testing the function:
*
*/
isValidVarible('') // Error: no value entered
isValidVarible(5) // Type Error
isValidVarible() // Type Error
isValidVarible('firstName') // valid
isValidVarible('last_name') // valid
isValidVarible('$connection') // valid
isValidVarible('_main') // valid
isValidVarible('num1') // valid
isValidVarible('%number') // invalid
isValidVarible('2num') // invalid
isValidVarible('$name_%lastName') // invalid
/*
*
*
* this functions check the validition for varible
*
*/
function checkValidate(arr){
    let firtstChar = arr[0]
    let symbols = /[^a-zA-Z]/g
    let numbers = /\d+/gi
    let isValid = true
    /*
    *
    */
    if(firtstChar === '$' || firtstChar === '_' || firtstChar.match(/[a-zA-Z]/)){
        for(let i = 1; i<arr.length; i++){
            if(arr[i].match(symbols)){
                if(arr[i].match(numbers) || arr[i] === '_'){
                    continue
                }else{
                    isValid = false
                    break
                }
            }else{
                continue
            }
        }
    }else{
        isValid = false
    }
    /*
    * result:
    */
    if(isValid){
        console.log('\'' +  toString(arr) + '\' is a valid varible');
    }else{
        console.log('\'' +  toString(arr) + '\' is an invalid varible');
    }
}
/*
* function to change string to array
*/
function toArray(variable){
    const arr = []
    for(let i = 0; i<variable.length; i++){
        arr.push(variable[i])
    }
    return arr
}
/*
* function to change a string to array
*/
function toString(arr){
    let variable = ''
    for(let i = 0; i<arr.length; i++){
        variable += arr[i]
    }
    return variable
}

