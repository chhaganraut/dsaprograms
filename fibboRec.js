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
fibboRec(5)

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


fibbo(arr[0],arr[1])
console.log(arr);
