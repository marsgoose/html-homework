//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}
let users = []

  users.push(new User(23,'Max','Kolobenko','kolobenko@gmail.com',+380504223453),
 new User(42,'Petya', 'Danelyk','danelyk@gmail.com',+380507564598),
new User(33,'Kolya', 'Koval','koval1342@gmail.com',+38050468098),
new User(20,'Olya', 'Danelenko','danelenko@gmail.com',+38050754567),
new User(12,'Petya', 'Kostenko','kostenko@gmail.com',+38050788398),
new User(95,'Vasya', 'Panchenko','panchenko@gmail.com',+38050790298),
new User(32,'Oleg', 'Gavrilenko','gavrilenko@gmail.com',+38050113498),
new User(43,'Andrey', 'Aliev','aliev4856@gmail.com',+38050756956),
  new User(94,'Masha', 'Makarenko','makarenko@gmail.com',+38050798455),
  new User(41,'Max', 'Simanenko','simanenko@gmail.com',+38050664058))

console.log(users)


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterId =users.filter(function (users){
    if (users.id % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(filterId)

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId = users.sort((lang1, lang2) => {
    return lang1.id - lang2.id
});
console.log(sortId)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

let clients = []


class Client {
    constructor(id, name, surname, email, phone, order){
        this.id = id
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
}

}

clients.push(new Client(23,'Max','Kolobenko','kolobenko@gmail.com',+380504223453, ['milk','cookies']),
    new Client(42,'Petya', 'Danelyk','danelyk@gmail.com',+380507564598, ['beef','beans','pea']),
    new Client(33,'Kolya', 'Koval','koval1342@gmail.com',+38050468098, ['bacon','cabbage']),
    new Client(20,'Olya', 'Danelenko','danelenko@gmail.com',+38050754567, ['plum','cucumber','cherry','carrot','salmon']),
    new Client(12,'Petya', 'Kostenko','kostenko@gmail.com',+38050788398, ['cheese']),
    new Client(95,'Vasya', 'Panchenko','panchenko@gmail.com',+38050790298, ['blueberry','walnut','chocolate','cherry']),
    new Client(32,'Oleg', 'Gavrilenko','gavrilenko@gmail.com',+38050113498, ['chocolate']),
    new Client(43,'Andrey', 'Aliev','aliev4856@gmail.com',+38050756956, ['cherry','milk','blueberry']),
    new Client(94,'Masha', 'Makarenko','makarenko@gmail.com',+38050798455, ['chocolate','walnut']),
    new Client(41,'Max', 'Simanenko','simanenko@gmail.com',+38050664058, ['cupcake','milk','honey','butter']))

console.log(clients)


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


let sortOrder = clients.sort((lang1, lang2) => {
    return lang1.order.length - lang2.order.length
});

console.log(sortOrder)




//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, maker, graduationYear, maxSpeed, engineCapacity){
         this.model = model;
         this.maker = maker;
         this.graduationYear = graduationYear;
         this.maxSpeed = maxSpeed;
         this.engineCapacity = engineCapacity;
         this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }
        this.info = function () {
                console.log(`model - ${this.model}`)
                console.log(`maker - ${this.maker}`)
                console.log(`graduation year - ${this.graduationYear}`)
                console.log(`max speed - ${this.maxSpeed}`)
                console.log(`engine capacity - ${this.engineCapacity}`)
        }
        this.increaseMaxSpeed = function (newSpeed) {
           this.maxSpeed = newSpeed
            console.log(car)
        }
        this.changeYear = function (newValue) {
            this.graduationYear = newValue
            console.log(car)
        }


}


const car = new Car('Mazda 6','Mazda Motor Corporation',2020,'228 km', 2.5)



console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed('234 km')
car.changeYear(2022)

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




class CarSecond {


    constructor(model, maker, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info() {
        console.log(`model - ${this.model}`)
        console.log(`maker - ${this.maker}`)
        console.log(`graduation year - ${this.graduationYear}`)
        console.log(`max speed - ${this.maxSpeed}`)
        console.log(`engine capacity - ${this.engineCapacity}`)
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed
        console.log(carSecond)
    }
    changeYear(newValue) {
        this.graduationYear = newValue
        console.log(carSecond)
    }
}
let carSecond = new CarSecond('Mazda 6','Mazda Motor Corporation',2020,'228 km', 2.5)

console.log(carSecond)
carSecond.drive()
carSecond.info()
carSecond.increaseMaxSpeed(265)
carSecond.changeYear(2023)

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = []

cinderellas.push(new Cinderella('Masha',23,42),
        new Cinderella('Olya',37,45),
        new Cinderella('Masha',18,34),
        new Cinderella('Sofia',21,37),
        new Cinderella('Anna',33,38),
        new Cinderella('Liza',23,33),
        new Cinderella('Anna',33,40),
        new Cinderella('Olya',33,41),
        new Cinderella('Liza',20,35),
        new Cinderella('Sofia',32,44))

class Prince {

    constructor(name, age, shoeSize ) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince ('Ricardo',21, 35)

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize){
        console.log(cinderella);
    }
}


