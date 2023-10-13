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
reverse()