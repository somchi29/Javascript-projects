function range(start, stop, step = 1) {
    const result = [];
  
    if (step > 0) {
      for (let i = start; i < stop; i += step) {
        result.push(i);
      }
    } else if (step < 0) {
      for (let i = start; i > stop; i += step) {
        result.push(i);
      }
    }
  
    return result;
  }
  

  console.log(range(1, 10, 2));
  console.log(range(5, 2, -1)); 
  