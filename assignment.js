

//convert kilometer to meter//

function kilometerToMeter(kilometer) {
    if (kilometer >= 1) {
        return kilometer * 1000;
    } else {
        return "distance can not be negative";
    }
}


//calculate budget cost//

function budgetCalculator(watch, phone, laptop) {
    var priceOfWatch = watch * 50;
    var priceOfPhone = phone * 100;
    var priceOfLaptop = laptop * 500

    var totalPrices = priceOfWatch + priceOfPhone + priceOfLaptop;
    return totalPrices;
}


//calculate hotel cost//

function hotelCost(days) {
    var costOneToTenDays = 0;
    var costElevenToTwenty = 0;
    var costOverTwenty = 0;

    if (days > 0) {
        for (var day = 1; day <= days; day++) {
            if (day >= 1 && day <= 10) {
                costOneToTenDays = day * 100;
            }
            else if (day >= 11 && day <= 20) {
                var newDays = day - 10;
                costElevenToTwenty = newDays * 80;
            }
            else if (day > 20) {
                var anotherNewDays = day - 20;
                costOverTwenty = anotherNewDays * 50;
            }
        }
    } else {
        return "Negative days are not valid";
    }

    var totalHotelCost = costOneToTenDays + costElevenToTwenty + costOverTwenty;
    return totalHotelCost;
}


// find the largest name//

function findLongestName(str) {
    var longestWord = [];
    var large = 0;
    if (str.length != 0) {
        for (var i = 0; i < str.length; i++) {
            if (str[i].length > large) {
                large = str[i].length;
                var longestWord = str[i];
            }
        }
        return longestWord;
    }else{
        return "String is empty";
    }
}


var resultOfMeter = kilometerToMeter(-2);
console.log(resultOfMeter);

var resultOfBudget = budgetCalculator(2,3,4);
console.log(resultOfBudget);

var resultForHotelCost = hotelCost(-2);
console.log(resultForHotelCost);

var result = findLongestName(["jubayer", "muhit", "sahidul islam", "alamin ahmed kakon"]);
console.log(result);
