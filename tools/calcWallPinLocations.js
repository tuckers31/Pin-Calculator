export default function calcWallPinLocations(arr, door) {
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