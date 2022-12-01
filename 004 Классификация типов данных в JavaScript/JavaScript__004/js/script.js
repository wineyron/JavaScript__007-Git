//Типы данных в JS:

const number = 18; //Числовой

const string = 'Veniamin'; //Строчный

const sym = Symbol(); //Символьный. На практие редко используется!

const boolean = true; //Логический(true or false)

null; //null - это когда мы делаем так, чтобы чего-то в коде не существовало.
//console.log(something)

undefined; //undefined - это когда объект существует, но значения никакого не имеет.
const myName = undefined; //console.log(myName)

const persone = {
    name: 'Venya',
    old: 18,
    isMarried: false,
    city: 'Slowjansk',
    country: 'Ukraine'
}; //Object - это комплекс данных, который может содержать все предыдущие данные

console.log(persone)

console.log(persone.isMarried)

console.log(persone['country'])


//Создание массива:

let photo = ['white.png', 'grey.png', 'black.png'] //Массив используется для хранения ЛЮБЫХ типов данных!

console.log(photo)

console.log(photo[2]) //Каждый элемент в массиве имеет свой порядковый номер. Исчисление начинается с 0!
console.log(photo[0])
console.log(photo[1])







