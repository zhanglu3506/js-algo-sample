
// Given a set of characters represented by a String, return a list containing all subsets of the characters.

// Assumptions

// There are no duplicate characters in the original set.
// ​Examples

// Set = "abc", all the subsets are [“”, “a”, “ab”, “abc”, “ac”, “b”, “bc”, “c”]
// Set = "", all the subsets are [""]
// Set = null, all the subsets are []

var set = 'abc';

function getAllSubsetsOf(set) {
  if (set === null) {
    return [];
  }
  let result = [];
  let current = '';
  _helper(set, 0, current, result);
  return result;

  function _helper(set, index, current, result) {
    // back when there is no more position.
    if(index == set.length) {
      // save result before lost the value of current.
      result.push(current);
      return;
    }
    debugger;
    // keep add index and put charactors into empty position.
    _helper(set, index + 1, current.concat(set.charAt(index)), result);
    // 
    current.slice(0, -1);
    debugger;
    _helper(set, index + 1, current, result);
  };
}

getAllSubsetsOf(set);



// Given a set of characters represented by a String, return a list containing all subsets of the characters.

// Assumptions

// There could be duplicate characters in the original set.
// ​Examples

// Set = "abc", all the subsets are ["", "a", "ab", "abc", "ac", "b", "bc", "c"]
// Set = "abb", all the subsets are ["", "a", "ab", "abb", "b", "bb"]
// Set = "", all the subsets are [""]
// Set = null, all the subsets are []
function getAllSubsets(set) {
  if(set == null) {
    return [];
  }
  result = [];
  current = '';
  _helper(set, index, current, result);
  return result;
  
  function _helper() {
    if(index == set.length){
      result.push(current);
      return;
    }
    _helper(set, index + 1, current.concat(set.charAt(index)), result);
    current.slice(0, -1);
    // TODO:
    _helper(set, index + 1, current, result);
  }
}
