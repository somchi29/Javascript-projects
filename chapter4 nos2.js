function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  
  
  let numbers = [20, 10, 5, 10, 10];
  let result = sum(numbers);
  
  console.log(sum(result)); 
  