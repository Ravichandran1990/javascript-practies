 // dad is palindrome
 // ravichandran is not palindrome
 
 function palindrome(string) {
    const len = string.length
    for (let index = 0; index < len; index++) {
         if(string[index] !== string[len -1 - index]) {
            return string +" is not palindrome"
         }
        
    }
    return string + " is palindrome"
 }
 
 console.log(palindrome("Testing"));