const myNumber = 89;
const friendNumber = 30;
if (myNumber > 80) {
    if (friendNumber > 80) {
        console.log('Go for a lunch');
    }
    else {
        if (friendNumber < 80 && friendNumber >= 60) {
            console.log('Good luck next time');
        }
        else {
            if (friendNumber < 60 && friendNumber >= 40) {
                console.log('message unseen');
            }
            else {
                if (friendNumber < 40) {
                    console.log('Blocked');
                }
            }
        }
    }
}
else {
    console.log('Go home & act sad');
}