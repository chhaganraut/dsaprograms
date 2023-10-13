

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

uniqueArr()


function uniqueArr1(){
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
uniqueArr1()