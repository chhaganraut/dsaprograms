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

console.log(binarySearch([1,4,5,10,3],10));