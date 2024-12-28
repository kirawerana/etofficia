class SpecMapper {
    constructor() {
        // Initialization code for SpecMapper
    }

    mapSpec(spec) {
        // Method to map a specification
        console.log('Mapping spec in SpecMapper:', spec);
    }
}

class CoreNormalizer extends SpecMapper {
    constructor() {
        super(); // Call the constructor of the parent class (SpecMapper)
        // Additional initialization code for CoreNormalizer
    }

    normalize(data) {
        // Method to normalize data
        console.log('Normalizing data in CoreNormalizer:', data);
    }

    // Optionally override methods from the parent class
    mapSpec(spec) {
        // Custom implementation for mapping a specification
        console.log('Mapping spec in CoreNormalizer:', spec);
    }
}

// Example usage
const normalizer = new CoreNormalizer();
normalizer.mapSpec({ key: 'value' }); // Output: Mapping spec in CoreNormalizer: { key: 'value' }
normalizer.normalize({ data: 'example' }); // Output: Normalizing data in CoreNormalizer: { data: 'example' }
