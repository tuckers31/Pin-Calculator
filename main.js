
const textField = document.querySelector('#length-input');
const ceilingField = document.querySelector('#ceiling-input')
const doorField = document.querySelector('#door-frame');

const submitButton = document.querySelector('#submit-button')
const clearButton = document.querySelector('#clear-button');
const lengthElem = document.querySelector('#total-length');
const resultElem = document.querySelector('#result');
const ceilingElem = document.querySelector('#ceiling-result');

function calcCeilingPinLocations(wallPins, ceilingPanels) {
    // Create an empty object to store the calculated pin locations
    let ceilingPins = {};

    // Iterate over the list of wall pins
    for (let i = 0; i < wallPins.length; i++) {
        // Iterate over the list of ceiling panels
        for (let j = 0; j < ceilingPanels.length; j++) {
            // Calculate the position of the ceiling panel relative to the wall
            let panelStart = 0;
            for (let k = 0; k < j; k++) {
                panelStart += ceilingPanels[k] + 0.125;
            }

            // If the wall pin falls within the current ceiling panel,
            // calculate its position on the ceiling panel and add it to the appropriate array
            if (wallPins[i] >= panelStart && wallPins[i] < panelStart + ceilingPanels[j]) {
                // If the array for the current panel does not yet exist, create it
                if (!ceilingPins[j + 1]) {
                    ceilingPins[j + 1] = [];
                }

                ceilingPins[j + 1].push(wallPins[i] - panelStart);
                break;
            }
        }
    }

    // Return the object of ceiling pin locations
    return ceilingPins;
}

function calcWallPinLocations(arr, door) {
    let location = 0;
    let pinArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 47) {
            location += 12;
            pinArr.push(location);
            location += (arr[i] - 24);
            pinArr.push(location);
            location += 12;
        } else if (arr[i] >= 36) {
            location += 10;
            pinArr.push(location);
            location += (arr[i] - 20);
            pinArr.push(location);
            location += 10;
        } else if (arr[i] >= 26) {
            location += 8;
            pinArr.push(location);
            location += (arr[i] - 16);
            pinArr.push(location);
            location += 8;
        } else if (arr[i] >= 8) {
            location += arr[i] / 2;
            pinArr.push(location);
            location += arr[i] / 2;
        } else if (arr[i] === 1) {
            location += door;
        } else {
            location += arr[i];
        }
        location += .125;
    }
    location -= .125;
    return location, pinArr
}

function clearField(lengthElem, resultElem) {
    textField.value = '';
    ceilingField = '';
    doorField.value = '47.125';
    lengthElem.style.display = 'none';
    resultElem.style.display = 'none';
}

function displayCeilingCalculations(ceilingPinObj, ceilingElem) {
    if (!ceilingPinObj) {
        ceilingElem.style.display = 'block';
        ceilingElem.innerText = 'Invalid Input';
        return;
    };
    let ceilingPinArr = []
    for (let panel in ceilingPinObj) {
        ceilingPinArr.push(panel)
    }
    console.log(ceilingPinArr)
    pinString = ceilingPinArr.join('", ');
    ceilingElem.innerText = `Pin Locations: ${pinString}"`;
    ceilingElem.style.display = 'block';
}

function displayWallCalculations(length, lengthElem, pins, resultElem) {
    if (isNaN(length) || length === 0) {
        lengthElem.style.display = 'block';
        lengthElem.innerText = 'Invalid Input';
        return;
    };
    pinString = pins.join('", ');
    lengthElem.innerText = `Wall Length: ${length}"`;
    resultElem.innerText = `Pin Locations: ${pinString}"`;
    resultElem.style.display = 'block';
    lengthElem.style.display = 'block';
}

function getSubmittedValue(field) {
    const panelString = field.value;
    const panelStringArr = panelString.split(', ')
    const panelArr = panelStringArr.map(elem => Number(elem))
    return panelArr
}


submitButton.addEventListener('click', function() {
    console.log("submitButton")
    length, wallPinArr = calcWallPinLocations(getSubmittedValue(textField), Number(doorField))
    console.log(length)
    console.log(wallPinArr)
    if (ceilingField) {
        ceilingPinArr = calcCeilingPinLocations(wallPinArr, getSubmittedValue(ceilingField))
        console.log(ceilingPinArr)
        displayCeilingCalculations(ceilingPinArr, ceilingElem)
    }
    displayWallCalculations(length, lengthElem, wallPinArr, resultElem)
});

clearButton.addEventListener('click', function () {
   clearField(lengthElem, resultElem) 
})
