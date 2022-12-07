export default function calcCeilingPinLocations(wallPins, ceilingPanels) {
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
