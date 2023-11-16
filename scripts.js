//let arr = ['10', '20', '30', '50', '235', '3000'];
//let arr1 = [1, 2, 5]

//for(let i = 0; i < arr.length; i++) {
//    for(let j = 0; j < arr1.lenght; j++){
 //       if(+arr[i][0]=== arr1[j]) console.log(arr[i])
//    }
//}

//let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
//let indx = arr.indexOf(0);
//let lastIndx = arr.lastIndexOf(0);

//let count = 0;
//console.log(indx);
//console.log(lastIndx);

//for(let i = indx; i < lastIndx; i++) {
  //  count += arr[i]

//console.log(count);

//let height = 5;
//let str = '^';
//let countWhitespase = height - 1;

//for(let i =1; i <= height; i++) {
  //  let whitespase = ' '.repeat(countWhitespase)
    //countWhitespase--;
    //console.log(`${whitespase}${str}${whitespase}`)
    //str += "^^"
//}
//let b = 15;
//function getUser() {
  //  let a = 5
    //let b = 6
    //console.log('kolya');
    //console.log(a);
  //  console.log(b);
//}
//getUser()
//console.log(b);

//function getUser1(num, user, isUser = true) {
//console.log(num);
//console.log(user);
//console.log(isUser);
//isUser ? console.log(user) : console.log(num);
//}
//getUser1(15, 'olya', true);


//const setUser = function () {
//onsole.log('olya');
//}
//setUser()

//const setUser1  = () => console.log('hello olya');
   
    
    //setUser1()

    //function sum (a, b){
      //  const res = a + b;
      //  return  a + b

    //}

   // let result = sum(1, 2);
   // console.log(result);
   // console.log(sum(1, 2));

    function getAge (age) {
        if(age > 18) {
            return'Ljcneg hfphity'
        } else {
            return'ljcnneg pfghtoty'
        }
return age > 18 ? 'ljcneg hfphtity' : 'ljcneg pfghtoty'
    }
    getAge (28)

    *******************************************************
      // 1

    function example (a, b, c) {
      console.log((a - b) / c);
    }
    example(3);

    // 2

    function example (a) {
      console.log(a * a);
      console.log(a * a * a);
    }
    example(5);

    // 3

    function min(a, b) {
      if (a < b) {
        return a;
      } else {
        return b;
      }
    }
    min (7, -1);

    // 4
  let a = prompt('введите количество элементов');
    let array = [];
    function createArray() {

      for(let i = 1; i <= a; i++) {
      array.push(i);
    }
    return array;
  }
  function showArray() {
    console.log(array);
  }
  createArray();
  showArray();

  // 5

  function isEven(b){
if (b % 1 === 0){
  console.log('проверка на целое число');
}
if (b % 2 === 0) {
  return true;
}else{
  return false;
}
  }
  isEven (8);

  // 6

  function fun() {
    newArray = [];
    for(let i = 0; i <= array.length; i++) {
      if(isEven(array[i])) newArray.push(array[i]);
    }
    return newArray;
  }
let array = [2, 5, 8, 7, 5, 1, 10];
 fun(array);

 // 7

 let a = prompt('введите количество рядов');
 let str = '';
 function piramida(a){
    for(let i = 0; i <= a; i++) {
        str += '\n';
        for(let j = 0; j < i; j++) {
          str += i;
        }
    }
    console.log(str);
 }
 piramida(a);

 // 10

 function getSum(value){
  let sum = 0

  for(let i=0; i <= value.lenghth; i++){
    sum += +value[i]
  }
  console.log(sum);

  if(sum > 9) {
    return getSum(String(sum))
  }
  return sum
 }
getSum('99')

// 12








 

****************************************************

function ask(question, yes, no){
  if(confirm(question)) yes()
  else no()
}
function showOk(){
  console.log('вы  согласны');
} 

function showCancel(){
  console.log('вы не согласны');
}
ask('Вы согласны ?', showOk, showCancel);