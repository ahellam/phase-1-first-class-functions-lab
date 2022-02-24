// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function([first, second]){
    let arr = [];
    let arr2 = drivers.slice(0, 2);
    return arr2;
}
const returnLastTwoDrivers = function([first, second]){
    let arr = [];
    let arr2 = drivers.slice(2, 4);
    return arr2;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return int * fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}