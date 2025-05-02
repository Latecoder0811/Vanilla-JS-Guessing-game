let num = Math.floor(Math.random() * 100) + 1;
let count = 0; 
let inp = Number(prompt("enter the number",""));
do{
    if(inp < num){
        alert("your guess is lesser than the actual number. enter number again.")
        inp = Number(prompt("enter the number",""));
        count++; 
    }
    else if(inp > num){
        alert("your guess is larger than the actual number. enter number again.")
        inp = Number(prompt("enter the number",""));
        count++; 
    }
    else if(inp === num){
        alert("correct guess");
        count++
    }
}while(inp !== num); 

alert("score is " + (100 - count))