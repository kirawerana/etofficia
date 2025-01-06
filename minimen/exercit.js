function handleCharacter(character) {
    switch (character) {
        case 'M':
            console.log('The character is M');
            // Add additional logic for when the character is 'M'
            break;
        case 'A':
            console.log('The character is A');
            // Add additional logic for when the character is 'A'
            break;
        case 'Z':
            console.log('The character is Z');
            // Add additional logic for when the character is 'Z'
            break;
        default:
            console.log('Unknown character');
            // Add logic for handling unknown characters
            break;
    }
}

// Example usage
const char = 'M';
handleCharacter(char);
