function sortAbsValues() {
    const inputArray = [5, 12, -13, -10, -8, 20, 1];
    
        const n = inputArray.length;
    
        
        for (let i = 0; i < n ; i++) {
            for (let j = 0; j < n-1-i ; j++) {
                if (Math.abs(inputArray[j]) > Math.abs(inputArray[j+1 ]) ) {
                   
                    const temp = inputArray[j];
                    inputArray[j] = inputArray[j+1];
                    inputArray[j+1] = temp;
                }
            }
        }
    console.log(inputArray);
    
    }
    
    sortAbsValues();