var isDate = function (input) {

    if (input instanceof Date) {
        return !isNaN(input.getTime());
    }

    if (typeof input === "string") {
        return !isNaN(Date.parse(input));
    }

    return false;
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));