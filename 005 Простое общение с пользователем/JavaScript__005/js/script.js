//Метод alert().Это самое простое модальное(всплывающее) окно.
//При его появлении дальнейшее выполнение кода страницы прекращается до тех пор, пока пользователь не закроет окно!
// alert('Сайт имеет вирус!');

//Метод confirm(). Это диалоговое окно, в котором есть возможность выбрать "ok" or "cancel"
//Если мы выбираем "ok" - то в консоли нам возвращается логическое значение - "true"
//Если мы выбираем "cancel" - то в консоли нам возвращается логическое значение - "false"
// const answer = confirm('Вы хорошо подумали?');
// console.log(answer)

//Метод prompt(). Это диалоговое окно с полем для ответа пользователя.
//Это окно предназначено для запроса данных, которые пользователю нужно ввести в текстовое поле.
const antwort = prompt('Bist du 18?', 'Ja');

console.log(antwort)

//typeof() . При помощи typeof() мы можем проверять данные на тот тип, который они имеют!
console.log(typeof(antwort)); //string

//Проверка массива с помощью typeof() :
const photo = ['white.png', 'grey.png', 'black.png'];

console.log(typeof(photo)); //Будет показано - object. Это ошибка самого JS!