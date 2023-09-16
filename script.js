function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

  // Iterate through the string to count character occurrences
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
