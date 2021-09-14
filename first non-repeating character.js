
const firstUniqChar = function (S){
   
   let result = {}
   
   //loop through
   for(let i =0; i<S.length; i++) {
       if(!result[S[i]])
       result[S[i]]=1
       
       else
       
   result[S[i]]++
   } 
    return -1
    
};

let string = {
    'j':1,
    'a':1,
    'v':1,
     'a':1,
     's':1,
    'c':1,
    'r':1,
    'i':1,
    'p':1,
    't':1
}



console.log(firstUniqChar(string))
