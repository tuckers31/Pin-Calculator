import calcCeilingPinLocations from "./tools/calcCeilingPinLocations";
import getSubmittedValue from "./tools/getSubmittedValue";
import calcWallPinLocations from "./tools/calcWallPinLocations";
import clearField from "./tools/clearField";
import displayWallCalculations from "./tools/displayWallCalculations";
import displayCeilingCalculations from "./tools/displayCeilingCalculations";

const textField = document.querySelector('#length-input');
const ceilingField = document.querySelector('#ceiling-input')
const doorField = document.querySelector('#door-frame');

const submitButton = document.querySelector('#submit-button');
const clearButton = document.querySelector('#clear-button');
console.log("submitButton")
const lengthElem = document.querySelector('#total-length');
const resultElem = document.querySelector('#result');
const ceilingElem = document.querySelector('#celing-result');

submitButton.addEventListener('click', function() {
    console.log("submitButton")
    length, wallPinArr = calcWallPinLocations(getSubmittedValue(textField), Number(doorField))
    if (ceilingField) {
        ceilingPinArr = calcCeilingPinLocations(wallPinArr, getSubmittedValue(ceilingField))
        displayCeilingCalculations(ceilingPinArr, ceilingElem)
    }
    displayWallCalculations(length, lengthElem, wallPinArr, resultElem)
});

clearButton.addEventListener('click', function() {
   clearField(lengthElem, resultElem) 
})

