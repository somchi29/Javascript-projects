function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }
  
 
  function listToArray(list) {
    let array = [];
    while (list) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  

  function prepend(element, list) {
    return { value: element, rest: list };
  }
  

  function nth(list, position) {
    if (!list) return undefined;
    if (position === 0) return list.value;
    return nth(list.rest, position - 1);
  }

  function nthRecursive(list, position) {
    if (!list) return undefined;
    if (position === 0) return list.value;
    return nthRecursive(list.rest, position - 1);
  }
  

  const array = [1, 2, 3];
  const list = arrayToList(array);
  console.log(list); 
  console.log(listToArray(list)); 
  console.log(prepend(0, list));  
  console.log(nth(list, 1)); 
  console.log(nthRecursive(list, 2));
  