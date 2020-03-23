function soma(n){
    console.log(n + 11);
}
soma(23);
// Function as param 
setTimeout(function () {
  console.log('it´s working part 1');
}, 3000);

const timeOut = function (){
  console.log('it is working part 2');
}

setTimeout(timeOut, 3000);

 function getNome() {
   console.log('Elleois')
 }
getNome();

const loading = setInterval(function(){
  console.log('loading...')
}, 500);

setTimeout(function(){
  clearInterval(loading)
  console.log('loaded')
}, 2000)

//Anonymous function 
const message = name => 'Hi ' + name;

console.log(message('Mario'));

const divided = (a, b ) => a / b
console.log(divided(4, 2))

//immutable function
 const pureSum = (a, b) => a + b
  console.log(pureSum(23, 6))

  //anonymous class
user1 = {
  name: 'Luis',
  age: 23,
}
user2 = new class{
  construtor(){
    this.name = 'Mario'
    this.age =  21
  } 
}
console.log( user1, typeof user1)
console.log( user2, typeof user2)
 //Rest operators
 function sum(... nums){
   let result = 0
   for(let index = 0; index < nums.length; index++ ){
     result += nums[index];
   }
   return result;
 } 
 console.log(sum(23, 45, 1, 2, 12, 490));

 //Spread operators
  students = {
    name: 'Amilton',
    grade: 13,
    number: 3
  }

  students2 = {
    ... students,
    level: 2,
    nickName: 'Batalha'
  }
  console.log(students2);

  const mt1 = [0,1,0,0,0];
  const mt2 = [... mt1, 0,0,1,0,0];
  const mt3 = [... mt2, 0,0,0,1,0];
  console.log(mt3);

//Map, Filter & Reduce
const numbers = [2, 4, 6 ,8, 10, 12];

//Map
const nums = numbers.map(function(num){
  return num * 2;
})
console.log(nums);

//Or
//const nums = numbers.map(nums => num * 2)
//console.log(nums);

//Filter
const nums2 = numbers.filter(function(num){
  return num % 2 === 0;
})
console.log(nums2);

//Reduce
//const sum = numbers.reduce((acumulador, num) => {
  //return acumulador + num
//}, 0)

