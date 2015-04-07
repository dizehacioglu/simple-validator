// Prompt the user to enter their phone number with dashes.
var phoneNum = prompt("Can I have yo numbah? (Promise I'll keep it to myself ;D)", "ex. 555-555-5555");

// Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes

alert(phoneNum[3] === "-" && phoneNum[7] === "-");

// Following the same procedure as #2 and #3 above to prompt and validate the following fields:

// birth date
// must follow the format xx/xx/xx

var birthDate = prompt("When's your birthday?", "MM/DD/YY");
alert(birthDate[2] === "/" && birthDate[5] === "/");

// postal code
// must follow the format xxxxx OR xxxxx-xxxx

var postal = prompt("What's your postal code?", "xxxxx OR xxxxx-xxxx");
alert(postal.length === 5 || (postal.length === 10 && postal[5] === "-"));

// state abbreviation
// must be two characters
// must be all caps

var state = prompt("Which state do you live in?", "ex. CO");
alert(state.length === 2 && state.toUpperCase() === state);

// married
// must be yes or no
// may be any capitalization: YES, Yes, yes

var married = prompt("Are you married?", "Yes/No");
alert(married.toUpperCase() === "YES" || married.toUpperCase() === "NO");

















