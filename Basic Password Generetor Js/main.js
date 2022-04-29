/*
* Basic Password Generetor
*/
/*
 * randomLetters() - - getting random amount of letters according to the user choice
*/
const randomLetters = (l) =>{
    let randLetters = [];
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    /*
    */
    for(let i = 0; i<l; i++){
        let rand =Math.floor(Math.random()*(letters.length));
        randLetters.push(letters[rand]);
    }
    return randLetters;
}
/*
 * randomSysmbols() - - getting random amount of symbols according to the user choice
*/
const randomSysmbols = (s) =>{
    const randSymbols = [];
    const symbols = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>',',','.','?','/','\''];
    /*
    */
    for(let i = 0; i<s; i++){
        let rand =Math.floor(Math.random()*(symbols.length));
        randSymbols.push(symbols[rand]);
    }
    return randSymbols;
}
/*
 * randomNumbers() - - getting random amount of numbers according to the user choice
*/
const randomNumbers = (n) =>{
    const randNumbers = [];
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    /*
    */
    for(let i = 0; i<n; i++){
        let rand =Math.floor(Math.random()*(numbers.length));
        randNumbers.push(numbers[rand]);
    }
    return randNumbers;
}
/*
 * generetedPassword():
 * combining all the random arrays
 * shuffling the combined array and assigning it to a string varible
 * it returns the genereted password for user
*/
const generetedPassword = (l,s,n) =>{
    const letters = randomLetters(l);
    const symbols = randomSysmbols(s);
    const numbers = randomNumbers(n);
    let password = [];
    let randomizedPassword = [];
    let newPassword = '';
    /*
    */
    for(let i = 0; i<letters.length; i++){
        password.push(letters[i]);
    }
    for(let i = 0; i<symbols.length; i++){
        password.push(symbols[i]);
    }
    for(let i = 0; i<numbers.length; i++){
        password.push(numbers[i]);
    }
    /*
    */
    for(let i = 0; i<password.length; i++){
        randomizedPassword.push(password[i]);
    }
    /*
     * shuffle(randomizing the array)
    */
    randomizedPassword.sort(() => Math.random() - Math.random()).slice(0, password.length);
    for(let i = 0; i<randomizedPassword.length; i++){
        newPassword += randomizedPassword[i];
    }
    return newPassword;
}
/*
*
*
*/
let genereted_password = document.getElementById('generetedPassword');
let btn = document.getElementById('btn');
let result_span = document.getElementById('result-span');
/*
 *
 * recommended password to user:
*/
genereted_password.textContent = generetedPassword(10,3,4);
/*
*
*/
btn.addEventListener('click', () =>{
    /*
    */
    let l_amount = document.getElementById('letter').value;
    let s_mount = document.getElementById('symbol').value;
    let n_amount = document.getElementById('number').value;
    result_span.textContent = 'Genereted Password: ';
    genereted_password.textContent = generetedPassword(l_amount,s_mount,n_amount);
    /*
    */
    document.getElementById('password-status').textContent = checkStatus(generetedPassword(l_amount,s_mount,n_amount));
})
/*
 * checkStatus():
 * it checks the status of the user's genereted password
 * Strong, Meduim or Weak password
*/
function checkStatus(password){
    if(password.length >14){
        return 'Strong Password';
        }else if(password.length >=8 && password.length <=14){
        return 'Meduim Password';
    }else if(password.length >0 && password.length < 8){
         return 'Weak Password';
    }else{
        return 'No password genereted!';
    }
}


