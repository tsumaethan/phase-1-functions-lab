// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // Assuming 1 block = 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264; // Assuming 1 block = 264 feet
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'; // Return this message for distances over 2500 feet
    }
}
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
