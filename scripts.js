/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

const searchTerms = (yourString, dictionary) => {
  let output = [];
  for (i=0; i<dictionary.length; i++) {
    if (yourString.match(dictionary[i]) != null) {
      output.push(dictionary[i]);
    }
  }
  if (output >= 0) {
    return null;
  } else {
    return output;
  }
}

$(document).ready(function() {

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
    'beyond',
  ];
  let testString = 'thefoxquickbrownjumpsoverdoglazy';

  $('#output-section-1').text(dictionary);
  $('#output-section-2').text(testString);
  $('#output-section-3').text(searchTerms(testString, dictionary));
});
