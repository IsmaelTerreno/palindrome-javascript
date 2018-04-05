/**
 * Verify if the string is Palindrome.
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
    for (var i = 0; i < n/2; ++i) {
        if (textToCheck.charAt(i) != textToCheck.charAt(n-i-1)) return false;
    }
    return true;
}
