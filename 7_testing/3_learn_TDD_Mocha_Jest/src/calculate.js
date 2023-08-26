const Calculate = {
    factorial(output){
      let temp = 1;
      if (output < 0){
        for (let i = output; i < 0; i++){
        temp *= i;
        }
        return temp
      } else if (output > 0){
      for(let i = output; i > 0; i--){
        temp *= i;
        }
      return temp
      } else {
        return 0
      }
    }
  }

  export default Calculate;
  
  
  