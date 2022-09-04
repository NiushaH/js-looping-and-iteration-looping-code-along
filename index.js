// Code your solutions in this file
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}


// function countDown (numberfromuserinput) {
//   while (numberfromuserinput > 0) {
//     console.log(numberfromuserinput);
//     numberfromuserinput -= 1;
//   }
// console.log(numberfromuserinput(10));
// }


// function countdown(i) {
//     while(i<=0)  {  
//         return i;
//     return i + " " + countdown(--i);
//     }
//   console.log(countdown(5));
// }


// function countdown(i); {
//   while (countdown > 0){
//       countdown--;
//       console.log(countdown);
//   }
//   console.log(countdown(15));
// }
// console.log("Blastoff");
