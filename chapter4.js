function range(start, end) {
    if (start > end) {
      return [];
    } else {
      const result = [];
      for (let i = start; i <= end; i++) {

        result.push(i);
      }
      return result;
    }
  }
  
  
  const start = 1;
  const end = 10;
  const result = range(start, end);
  
  console.log(result); 
  

  function sum(numbers) {
    let add = 0;
    for (let index = 0; index < numbers.length; index++) {
        add += numbers[index];
        
    }
    return add;
    
  }
  let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sum(numbers));