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
  for (let i = 0; i < n / 2; ++i) {
    if (textToCheck.charAt(i) !== textToCheck.charAt(n - i - 1)) { return false; }
  }
  return true;
}

const sample1 = "ALULA";
const sample2 = "ANANA";
const sample3 = "CIVIC";
const sample4 = "DEKED";
const sample5 = "DELEDK";

// Testing results:
console.log(
  (isPalindrome(sample1) === true ) ?
  	"Test Ok.":"Test Fails.");
console.log(
  (isPalindrome(sample2) === true ) ?
  	"Test Ok.":"Test Fails.");
console.log(
  (isPalindrome(sample3) === true ) ?
  	"Test Ok.":"Test Fails.");
console.log(
  (isPalindrome(sample4) === true ) ?
  	"Test Ok.":"Test Fails.");
console.log(
  (isPalindrome(sample5) === false ) ?
  	"Test Ok.":"Test Fails.");
