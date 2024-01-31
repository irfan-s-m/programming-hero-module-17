let ticketPrice = 800;
let discount;
let discountedPrice;
const passengerAge = 58;
const isStudent = false;
if (passengerAge < 10) {
    console.log('your ticket fare is free');
}
else if (isStudent == true && passengerAge <= 25) {
    discount = ticketPrice * 50 / 100;
    discountedPrice = ticketPrice - discount;
    console.log('you ticket fare is ', discountedPrice);
}
else if (passengerAge >= 60) {
    discount = ticketPrice * 15 / 100;
    discountedPrice = ticketPrice - discount;
    console.log('you ticket fare is ', discountedPrice);
}
else {
    console.log('Your ticket fare is 800');
}