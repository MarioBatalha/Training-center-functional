var add = function(){
    var count = 0
    return function(){
        count += 1;
        return count
    }
}()
console.log(add())
console.log(add())
console.log(add())
