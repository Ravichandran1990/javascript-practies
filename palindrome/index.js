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

 function palindrome1(string) {
   const revstr = string.split('').reverse().join('');
   if(string === revstr){
      console.log(string + " is palindrome");
   }else {
      console.log(string +" is not palindrome");
   }
   
 }
 
 palindrome1("dada")
 