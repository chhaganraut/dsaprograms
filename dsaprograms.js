function prime(start,end){
    
    let prime=true
    for(i=start;i<end;i++){
        for(j=2;j<i/2;j++){
            if(i%j==0){
                
                prime=false
                break
              
            }
            
        }
        if(prime){
            console.log(i);
        }
        else{
            prime=true
        }
    }
}
// prime(10,20)

function reverse(){
    var num=123
    var rev=0
    var rem;
    while(num!=0){
     rem=num%10
        rev=(rev*10)+rem
        num=num/10
    }
    console.log(rev);
}
// reverse()

function uniqueArr(){
    let arr=[1,2,3,2,3,1,4,1,1,2,2,2]
    arr.sort()
    console.log(arr);
    let newArr=[]
    let j=0
    for(i=1;i<arr.length;++i){
        if(arr[j]==arr[i]){
            j++
            arr[j]=arr[i]
        }

    }
    // console.log(arr);

}

// uniqueArr()

function uniqueArr(){
    let arr=[1,2,3,2,3,1,4,1,1,2,2,2]
let newArr=[]   
for(i=0;i<arr.length;++i){
     
            if(!newArr.includes(arr[i])){
                newArr.push(arr[i])
            }
    
}
console.log(newArr);
}
// uniqueArr()
function uniqueArr(){
let arr=[1,2,3,2,3,1,4,1,1,2,2,2]
let newArr=[]   
for(i=0;i<arr.length;++i){
    isPresent=false
    for(j=0;j<newArr.length;++j){
        if(arr[i]==newArr[j]){
            isPresent=true
            break
        }
    }
    if (!isPresent) {
        newArr.push(arr[i]);
    }

    }
       console.log(newArr);
}
// uniqueArr()







function customSortByAbsoluteValue() {
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

// customSortByAbsoluteValue();




function countCharacterOccurrences() {
    const inputString = "hello world";
    const charCount = {};

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char in charCount) {
        console.log(`'${char}' occurs ${charCount[char]} times`);
    }
}


// countCharacterOccurrences();



// function countCharacterOccurrences() {

//     const inputString = "hell";
//     for(let ch='a';ch<='z';++ch){
//         let count=0
//         for(let i=0;i<inputString.length;++i){
//             if(ch==inputString.charAt(i)){
//                 count++
//             }
//         }
//         console.log(count,ch);
//     }

// }        
// countCharacterOccurrences();


 let a=0
 let b=1
function fibboRec(i){
    
    if(i>=1){
        c=a+b
        console.log(c);
        a=b
        b=c
        fibboRec(i-1)
    }
}
// fibboRec(5)


const arr=[0,1]
let count=2
let index=10

function fibbo(num1,num2){
    if(count===index){
        return
    }else{
        arr.push(num1+num2)
        count++
        fibbo(num2,num1+num2)
    }
}

// fibbo(arr[0],arr[1])
// console.log(arr);

// For a given array of elements (numbers 1 to 20) arrange the elements in following order -> Ascending(Absolute(a[i] - 10))
	// eg, [5, 12, 13, 10, 8, 20, 1] -> [10, 8, 12, 13, 5, 1, 20]



    function absolutearr(){
        const arr=[5, 12, 13, 10,8,20,1] 

        const newArr=[]
        for(i=0;i<arr.length;++i){
            newArr.push(Math.abs(arr[i]-10))
        }
        console.log(newArr);
        for(i=0;i<newArr.length;++i){
            for(j=0;j<newArr.length-1-i;++j){
                if(newArr[j]>newArr[j+1]){
                    temp=newArr[j]
                    newArr[j]=newArr[j+1]
                    newArr[j+1]=temp
                    temp1=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp1
                }
            }
        }
        console.log(newArr);
        console.log(arr);
    }
    absolutearr()

    
    
    function spiralTraversal(matrix) {
        const result = [];
        const numRows = matrix.length;
        const numCols = matrix[0].length;
        let top = 0;
        let right = numCols - 1;
        let bottom = numRows - 1;
        let left = 0;
      
        while (left <= right && top <= bottom) {
          // Traverse the top row from left to right
          for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
          }
          top++;
      
          // Traverse the right column from top to bottom
          for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
          }
          right--;
      
          // Traverse the bottom row from right to left
          if (top <= bottom) {
            for (let i = right; i >= left; i--) {
              result.push(matrix[bottom][i]);
            }
            bottom--;
          }
      
          // Traverse the left column from bottom to top
          if (left <= right) {
            for (let i = bottom; i >= top; i--) {
              result.push(matrix[i][left]);
            }
            left++;
          }
        }
      
        return result;
      }
      
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      
    
    //   console.log(spiralTraversal(matrix));
      
      function binarySearch(arr,target){
            let left=0
            let right=arr.length-1

            while(left<=right){
                let mid=Math.floor((right+left)/2)

                if(target===arr[mid]){
                    return mid
                }
                if(target<arr[mid]){
                    right=mid-1
                }else{
                    left=mid+1
                }
            }
            return -1;
      }

    //   console.log(binarySearch([1,4,5,10,3],10));