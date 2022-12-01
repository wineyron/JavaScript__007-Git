//Мини-практика

const myName = {
    name: 'Veniamin (Вениамин)'
}

const myBezeichnung = {
    bezeichnung: ' ist sehr langweilig (очень скучный)'
}

const myOld = {
    old: 16
}

console.log(myName.name + myBezeichnung.bezeichnung);
console.log(myOld.old);

const myNameRichtig = myName

myNameRichtig.name = 'Nein, Veniamin (Нет, Вениамин)'

const myBezeichnungRichtig = myBezeichnung

myBezeichnungRichtig.bezeichnung = ' ist sehr cool! (очень крутой)'

const myOldRichtig = myOld

myOldRichtig.old = 18

console.log(myName.name + myBezeichnung.bezeichnung)
console.log(myOld.old)


//Изменение значений свойств:

const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

myCity.city = 'Las Vegas'

console.log(myCity.city)


//Добавление новых свойств:

const myCityy = {
    city: 'New York'
}

myCity.popular = true
myCity.country = 'USA'

console.log(myCity)


//Удаление свойств:

const myHome = {
    city: 'Slowjansk',
    region: 'Donetska oblast',
    country: 'Ukraine',
    popular: true,
}

console.log(myHome)

delete myHome.region

console.log(myHome)

delete myHome.country

console.log(myHome)

delete myHome.city

console.log(myHome)

delete myHome.popular

console.log(myHome)


//Доступ к значению свойства с использованием кнопок

const meinHaus = {
    city: 'Salzwedel'
}

console.log(meinHaus)

meinHaus['popular'] = true

console.log(meinHaus)

const countryPropertyName = 'country'

meinHaus[countryPropertyName] = 'Deutschland'

console.log(meinHaus)



//Объекты. Вложенные свойства:

const myStadt = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myStadt.info)

delete myStadt.info.country

console.log(myStadt.info)



//Объекты. Использование переменных:

const nameV = 'Veniamin'
const postsQty = 18

const userProfile = {
    nameV,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile.nameV)



//Методы объекта:

const myHeim = {
    stadtS: 'Salzwedel',
    cityGreeting: function () {
        console.log('Greetings!!!')
    }
}

myHeim.cityGreeting() //Сокращённый формат записи методов:

const myHeimM = {
    stadtTS: 'Salzwedel',
    cityGreetingS() {
        console.log('Greetings!!!')
    }
}

myHeimM.cityGreetingS()



//Конвертация JavaScript в JSON:

const post = {
    title: 'My post',
    likesQty: 5
}

JSON.stringify(post)

console.log(JSON.stringify(post))



//Мутация в JavaScript

//Как избежать мутаций?
//1 вариант:
const person = {
    namePerson: 'Veniamin',
    agePerson: 15
}

const person2 = Object.assign({}, person)

person2.agePerson = 18

console.log(person.agePerson)
console.log(person2.agePerson)
//2 вариант