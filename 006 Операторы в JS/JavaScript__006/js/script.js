'use strict'; //указывает, что мы пишем на JS(ES6)

//Операторы в JS
//'+', '-', '*', '/'

const myName = 'Veniamin';

const mySurname = ' Beznoshchenko';

console.log(myName + mySurname)

//Чтобы через prompt() получить от пользователя числовой тип
// нам нужно добавить оператор '+' к prompt()

// const myAge = +prompt('Bist du 18?', '');
// console.log(typeof(myAge)) //number . Теперь, что бы мы ни писали туда, нам будет выводится тип - number!


//Инкремент и Декремент:

let incr = 10;

let decr = 10;

// incr++;
// decr--;

//эти операторы можно добавлять сразу в выводе, перед названием переменной!
//Префиксный сначала инкрементирует(декрементирует), потом отдаёт значение, постфиксный сначала отдаёт значение, потом инкрементирует(декрементирует)!
console.log(++incr); //это префиксный инкремент. Он сначала инкрементирует, а потом отдаёт значение!
console.log(decr--); //это постфиксный декремент. Он сначала отдаёт значение, а потом уже декрементирует!


//оператор остатка от деления двух чисел - '%'
console.log(5%2) //1


//оператор равенства - '='
//'=' - присваивание. Как в переменной: const a = 1;
//'==' - проверка на равенство.
//'===' - строгая проверка по типам данных.
console.log('2' == 2); //true - потому что '==' сравнивает по значениям, в данном случае у них значение '2' !
console.log('2' === 2); //false - потому что '===' сравнивает по типу данных, в данном случает '2' - string, а 2 - number !


//оператор &&(и) :

let isChecked = true;

let isClose = false;

console.log(isChecked && isClose) //false - потому что оператор &&(и) возвращает true тогда, когда оба и более аргументов являются правдивыми(true) !


//оператор ||(или) :
console.log(isChecked || isClose) //true - потому что оператор ||(или) возвращает true тогда, когда хоть один аргумент является правдивым(true) !
//false можно получить только тогда, когда оба элемента имеют значение false !


//оператор отрицания '!'. Он обращает значение в обратное: правду в ложь, и наоборот!
let ja = false;

let nein = false;

console.log(ja || !nein) //true - потому что оператор '!' изменил значение 'nein' на 'true' !







