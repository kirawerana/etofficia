// Function to classify scale types
function isContinuousToDiscrete(scaleType) {
    const continuousToDiscreteScales = ['logarithmic', 'quantize', 'threshold'];
    return continuousToDiscreteScales.includes(scaleType);
}

// Sample usage
let scaleType = 'logarithmic';

if (isContinuousToDiscrete(scaleType)) {
    console.log("The scale is a continuous-to-discrete transformation.");
    // Perform operations specific to continuous-to-discrete scales
} else {
    console.log("The scale is not a continuous-to-discrete transformation.");
    // Perform other operations
}
