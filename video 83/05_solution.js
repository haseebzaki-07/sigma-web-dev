// <!-- The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. -->
function passwordValidator(password) {
    // Check if password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check if password contains both uppercase and lowercase letters
    var hasUpperCase = false;
    var hasLowerCase = false;
    for (var i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            hasUpperCase = true;
        } else if (password[i] === password[i].toLowerCase()) {
            hasLowerCase = true;
        }
        if (hasUpperCase && hasLowerCase) {
            break;
        }
    }
    if (!(hasUpperCase && hasLowerCase)) {
        return false;
    }

    // Check if password includes at least one digit
    var hasDigit = /\d/.test(password);
    if (!hasDigit) {
        return false;
    }

    // If all criteria are met, return true
    return true;
}

// Example usage:
var password = "Passw0rd";
if (passwordValidator(password)) {
    console.log("Password is valid.");
} else {
    console.log("Password does not meet the criteria.");
}

