function countCharacterOccurrences() {
    const inputString = "hello world";
    const charCount = {};

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char in charCount) {
        console.log(`'${char}' occurs ${charCount[char]} times`);
    }
}


countCharacterOccurrences();