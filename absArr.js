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