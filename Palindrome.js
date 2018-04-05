/**
 * Verify if the string is Palindrome in case sensitive.
 * Complexity:
 * There is no need to do n comparisons to determine whether a word is a palindrome.
 * It is enough to do just (about) half the comparisons:
 * If n is even, it performs n/2 comparisons.
 * If n is odd, it performs (n-1)/2 comparisons.
 * Time: In the worst case, when the word is a palindrome, this algorithm performs O(n/2) inequality comparisons.
 * Space: Constant
 * @return true Palindrome otherwise false
 */
function isPalindrome(textToCheck) {
    const n = textToCheck.length;
    for (let i = 0; i < n/2; ++i) {
        if (textToCheck.charAt(i) != textToCheck.charAt(n-i-1)) return false;
    }
    return true;
}

/**
 * Search into the text the last and longest subtring palindrome in case sensitive.
 * Complexity:
 * Make n comparisons to determine whether a substring text is a palindrome.
 * Time: This algorithm performs O(n) inequality comparisons.
 * Space: Constant
 * @return String with the longest Palindrome found.
 */
function longestPalindromeInSubtring(textToProcess){
	let result = "";
	if(textToProcess){
		let deltaCursor = "";
      	let alphaCursorIndex = 0;
		textToProcess.split('').forEach(
			(letter, index, array)=>{
              	alphaCursorIndex = ((array.length - 1) === index ) ? index : index + 1;
				deltaCursor += letter + array[alphaCursorIndex];
				if(!isPalindrome((deltaCursor))){
                	deltaCursor = "" ;
                }
              	console.log(result.length);
              	console.log(deltaCursor.length);
              	if(result.length < deltaCursor.length){
                    result = deltaCursor;
                  	deltaCursor = "";
				}
			}
		);
	}
  	console.log(result);
	return result;
}



// This sample test has the "aaaa" longest Palindrome in Subtring.
const sample1 = "hbbbkp asaaaas";
// This sample test has the "gggg" longest Palindrome in Subtring.
const sample2 = "hggggkkple aas";
// This sample test has the "bbbbbb" longest Palindrome in Subtring.
const sample3 = "hbkp asasgsbbbbbb";
// Testing results:
console.log(
  (longestPalindromeInSubtring(sample1) === "aaaa" ) ?
  	"Test Ok.":"Test Fails.");
console.log(
  (longestPalindromeInSubtring(sample2) === "gggg" ) ?
  	"Test Ok.":"Test Fails.");
console.log(
  (longestPalindromeInSubtring(sample3) === "bbbbbb" ) ?
  	"Test Ok.":"Test Fails.");

