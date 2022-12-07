
export default function displayWallCalculations(length, lengthElem, pins, resultElem) {
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