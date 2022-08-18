

module.exports.getDateOfMonth = getDateOfMonth;
module.exports.getMonth = getMonth;
module.exports.getYear = getYear;
module.exports.getDayOfWeek = getDayOfWeek;

function getDateOfMonth(){

    const dateObject = new Date();

    const formattingOption = {
        day:"numeric"
    }
    return dateObject.toLocaleDateString("en-GB", formattingOption);

}

function getMonth(){

    const dateObject = new Date();

    const formattingOption = {
        month:"short"
    }
    return dateObject.toLocaleDateString("en-GB", formattingOption);

}

function getYear(){

    const dateObject = new Date();

    const formattingOption = {
        year:"numeric"
    }
    return dateObject.toLocaleDateString("en-GB", formattingOption);

}

function getDayOfWeek(){

    const dateObject = new Date();

    const formattingOption = {
        weekday:"short"
    }
    return dateObject.toLocaleDateString("en-GB", formattingOption);

}

console.log(module);