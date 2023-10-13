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
prime(10,20)