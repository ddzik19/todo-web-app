// generating an id with custom length
const cuid = (length, option) => {
    // creating a string for id
    var stringId = ''
    // the whole 26 letter alphabet 
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // will be used to assign a number or letter 
    var value;
    // generate the id
    // will produce id with numbers and letters
    if (option === 1) {
        for (var i = 0; i < length; i++) {
            var chance = Math.floor(Math.random() > 0.5);
            if (chance == 0) {
                // generating a single digit number
                value = Math.floor(Math.random() * 10)
            } else if (chance == 1) {
                // we get a random number from alphabet and use it as value for final id
                // instead of 26
                value = alphabet[Math.floor(Math.random() * 26)]
            }
            // adding the generated number to stringId
            stringId += value;
        }
    } else if (option === 2) { // will produce an id thats only numbers
        for (var i = 0; i < length; i++) {
            // generating a single digit number
            value = Math.floor(Math.random() * 10);
            // adding the generated number to stringId
            stringId += value;
        }
    } else if (option === 3) { // will produce an od thats only letters
        for (var i = 0; i < length; i++) {
            // we get a random number from alphabet and use it as value for final id
            // instead of 26
            value = alphabet[Math.floor(Math.random() * 26)];
            // adding the generated letter to stringId
            stringId += value;
        }
    }
    return stringId;
}
module.exports = cuid;