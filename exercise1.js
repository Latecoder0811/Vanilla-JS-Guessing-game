let num = Math.floor(Math.random() * 100) + 1;
let count = 0; 
let inp = Number(prompt("enter the number(must be between 1 and 100)",""));
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
    else{
        count++
    }
}while(inp !== num); 

let message = "";
if (count === 1) {
  message = "🎯 Master job! You nailed it in one shot!";
} else if (count > 1 && count < 5) {
  message = "🔥 Great guessing! You cracked it in under 5 tries.";
} else if (count >= 5&& count <= 10) {
  message = "👍 Good job! Took you a few tries, but you got there.";
} else {
  message = "😅 That was tough! But you made it — well done.";
}
alert(message);
alert("score is " + (100 - count))