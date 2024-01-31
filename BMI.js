let weight = 75;
let height = 1.6256;
let BMI = (weight) / height ** 2
if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are healthy");
} else {
    if (BMI < 18.5) {
        console.log('you are underweight');
    }
    else {
        if (BMI >= 25 && BMI <= 29.99) {
            console.log("You are overweight");
        }
        else {
            console.log("you are obese")
        }
    }
}