//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


let areaRectangle = (a,b) => a * b;

let rectangle = areaRectangle(10,13)
console.log(rectangle)


//- створити функцію яка обчислює та повертає площу кола з радіусом r


let areaCircle = (r) => Math.PI * r * r;

let circle = areaCircle(7)
console.log(circle)


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


let areaCylinder = (h,r) => 2 * Math.PI * r * r + 2 * Math.PI * r * h;

let cylinder = areaCylinder(15,6)
console.log(cylinder)


//- створити функцію яка приймає масив та виводить кожен його елемент

let iterator = (array) => {
    for (const item of array) {
        console.log(item)
    }
}
iterator([11,22,33])


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let text = (random) => document.write(`<p>${random}</p>`)

text('Lorem ipsum dolor.')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let elements = (text) => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

elements('Lorem ipsum dolor sit amet.')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим

let numberElements = (text, lenght) => {
    document.write('<ul>')
    for (let i= 0; i <lenght; i++) {
        document.write(`<li>${text}</li>`);}
}
document.write('</ul>')

numberElements('Lorem ipsum.', 7)


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitiveElements = (array) => {
for (const primitive of array) {
    document.write(`<div>${primitive}</div>`)}
}

primitiveElements([11,22,33,true,false,'ergwa'])


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let people=[
    {id: 0, name: 'vasya', age: 31},
    {id: 1, name: 'petya', age: 30},
    {id: 2, name: 'kolya', age: 29},
    {id: 3, name: 'olya', age: 28},
    {id: 4, name: 'max', age: 30},
    {id: 5, name: 'oleg', age: 28},
    {id: 6, name: 'andrey', age: 29},
    {id: 7, name: 'masha', age: 30},
    {id: 8, name: 'olya', age: 31},
    {id: 9, name: 'max', age: 31}]
let person = (array) => {
    for (const item of array) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
    }
}
person(people)


//- створити функцію яка повертає найменьше число з масив


let numbers = [-34 , 54 , 23 , 1 , -1 , 100 , -5 , 43]

let minNumber = (arr) => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[1]) {
            min = arr[1]
        }
    }
    return min;
}

console.log(minNumber(numbers))



//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13


let sumNumbers = (arr) => {
    let result = 0
    for (const num of arr) {
        result += num
    }
    return result;
}

console.log(sumNumbers([1 , 3 , 10 , 100]))


//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


let swap = (arr, index1, index2) => {
   const num1 = arr[index1];
   const num2 = arr[index2];
   arr[index1] = num2;
   arr[index2] = num1;
   return arr;
}
console.log(swap([11,22,33,44],0,1))


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const code of currencyValues) {
      if (code.currency === exchangeCurrency){
          return sumUAH / code.value
      }
    }
}

const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(result)