function pow(x, n){
    if(n == 1){
        return x
    }else if(n == -1){
      console.log(0)
    }else{
        return x* pow(x, n - 1);
    }
}
console.log(pow(4,5))