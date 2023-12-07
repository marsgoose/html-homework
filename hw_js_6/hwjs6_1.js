//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world'
let lorem = 'lorem ipsum'
let java = 'javascript is cool'

console.log(hello.length)
console.log(lorem.length)
console.log(java.length)


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'


console.log(hello.toUpperCase())
console.log(lorem.toUpperCase())
console.log(java.toUpperCase())

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


let hello2 = 'HELLO WORLD'
let lorem2 = 'LOREM IPSUM'
let java2 = 'JAVASCRIPT IS COOL'

console.log(hello2.toLowerCase())
console.log(lorem2.toLowerCase())
console.log(java2.toLowerCase())


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirty = ' dirty string   '
let trim = dirty.trim()
console.log(trim)
//console.log(trim[0])
//console.log(trim[trim.length - 1])


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
stringtoarray(str)
function stringtoarray(array) {
    let result =array.split(' ')
        console.log(result)


}


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0]

let strings = numbers.map((item) => item.toString())
console.log(strings)




//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]


function sortNums(nums, direction) {
    if (direction === 'ascending') {
      let sort = nums.sort((a, b) => {
            return a - b
        });
        console.log(sort)
    } else if (direction === 'descending') {
   let sort = nums.sort((a , b) => {
              return b - a
        });
    console.log(sort)
    }
}

sortNums([11,21,3],'descending')
sortNums([11,21,3],'ascending')


//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration


let sortDuration = coursesAndDurationArray.sort((lang1, lang2) => {
    return lang2.monthDuration - lang1.monthDuration
});
console.log(sortDuration)


//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(value => value.monthDuration >= 5);

console.log(filter)

//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesId =coursesAndDurationArray.map( function (value, index) {
    return {
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    };
});
console.log(coursesId)


//описати колоду карт (від 6 до туза без джокерів)

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'club', value: '6', color: 'black'},
    {cardSuit: 'club', value: '7', color: 'black'},
    {cardSuit: 'club', value: '8', color: 'black'},
    {cardSuit: 'club', value: '9', color: 'black'},
    {cardSuit: 'club', value: '10', color: 'black'},
    {cardSuit: 'club', value: 'jack', color: 'black'},
    {cardSuit: 'club', value: 'queen', color: 'black'},
    {cardSuit: 'club', value: 'king', color: 'black'},
    {cardSuit: 'club', value: 'ace', color: 'black'}
];

//- знайти піковий туз
    let find = cards.filter(function (value){
        if (value.cardSuit === 'spade' && value.value === 'ace') {
            return true
        } else {return false}
    })

console.log(find)
//- всі шістки

let filterCards = cards.filter(value => value.value === '6');

console.log(filterCards)

//- всі червоні карти

let filterCardsColor = cards.filter(value => value.color === 'red');

console.log(filterCardsColor)
//- всі буби

let filterCardsSuit = cards.filter(value => value.cardSuit === 'diamond');

console.log(filterCardsSuit)

//- всі трефи від 9 та більше


let filterCardsSuit2 = cards.filter(function (value) {
    if (value.cardSuit === 'club' && value.value <= '8'){
        return false
    } else if (value.cardSuit === 'club') {
        return true
    }
})
console.log(filterCardsSuit2)




//{
 //   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
 //       value: '', // '6'-'10', 'ace','jack','queen','king','joker'
 //   color:'', // 'red','black'
//}



//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//        diamonds:[],
//    hearts:[],
//    clubs:[]
//}

let reduce =cards.reduce((accumulator, cards) => {
    if (cards.cardSuit === 'spade') {
        accumulator.spades.push(cards)
    } else if (cards.cardSuit === 'diamond') {
        accumulator.diamonds.push(cards)
    } else if (cards.cardSuit === 'heart') {
        accumulator.hearts.push(cards)
    } else if (cards.cardSuit === 'club') {
        accumulator.clubs.push(cards)
    }

    return accumulator},
    {spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
    })

console.log(reduce)


//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker


