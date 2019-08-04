/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

const dictionary = [
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
  'bed',
  'bath',
  'beyond'
];


let testString = 'the';

const matcher = (yourString, testword) => {
  if (yourString.length != testword.length) {
    return 0;
  }
  for (i=0; i<yourString.length; i++) {
    if (yourString[i] != testword[i]) {
      return 0;
    }
  }
  return testword;
}

const search = (yourString, dictionary) => {
  if (!yourString || !dictionary) {return 0}
  let match = 0;
  for (i=0; i<yourString.length; i++) {
    for (j=0; j<dictionary.length; j++) {
        match = matcher(yourString, dictionary[j])
      }
      console.log('match = ', match)
    }
    return match;
  }

console.log(search(testString,dictionary))

$(document).ready(function() {

  $('#output-section-1').text(1);
  $('#output-section-2').text(2);

});
