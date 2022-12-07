export default function displayCeilingCalculations(ceilingPinArr, ceilingElem) {
    if (isNaN(ceilingPinArr) || ceilingPinArr === 0) {
        ceilingElem.style.display = 'block';
        ceilingElem.innerText = 'Invalid Input';
        return;
    };
    pinString = ceilingPinArr.join('", ');
    resultElem.innerText = `Pin Locations: ${pinString}"`;
    resultElem.style.display = 'block';
    ceilingElem.style.display = 'block';
}