//* these are my variables /
let billAmount = 16;
let numOfDiners = 4;
let qualityOfService = 'serviceGood';
let tip;

//* Function calcTip will calculate the tip for the bill depending on the service /
function calcTip () {
  if (qualityOfService === 'serviceGreat') {
    tip = .2;
  }
else if (qualityOfService === 'serviceGood'){
  tip = .15;
}
 else if (qualityOfService === 'serviceBad'){
   tip = .10;
 } 
  else if (qualityOfService === 'serviceNone')
    tip = 0;
}
//* These are the equations used to calculate the different things /
calcTip();
let totalTip = tip * billAmount;
let totalTipPerPerson = totalTip / numOfDiners;
let totalBill = totalTip + billAmount;
let billPerPerson = totalBill / numOfDiners;
//* The console.log spits out the wanted text + the total of whatever you need /
console.log ('Your total tip per person is: $' + totalTipPerPerson);
console.log ('Your total tip is: $' + totalTip);
console.log ('Your total bill including the tip is: $' + totalBill);
console.log ('The bill per person is: $' +billPerPerson);
console.log ('Your bill with no tip is: $' + billAmount);