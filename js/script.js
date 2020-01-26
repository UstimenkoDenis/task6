'use strict';
// восстановление порядка
let menu = document.querySelector('.menu'), //привязываю родительский класс menu
                                            //  к переменной menu
menuItem = document.getElementsByTagName("li"); // привязываю тэг li к переменной
                                                // menuItem. Теперь menuItem - псевдомассив
    
menu.insertBefore(menuItem[2], menuItem[1]); // вставка

// добавка 5 го пункта

let newElement = document.createElement('li'); // создаём новый элемент li

newElement.classList.add('menu-item'); // привязываем к нему класс menu-item

newElement.innerHTML = 'Пятый пункт'; // добовляем надпись к тэгу li 

menu.appendChild(newElement); // добавляем наш созданный элемент на страницу

console.log(newElement); // проверяем как выглядит наш созданный элемент  

// замена заднего фона

let body =  document.getElementsByTagName("body"); // создает псевдомассив body 
// из одного элемента и поэтому обращаться к нему нужно через body[0]

body[0].style.backgroundImage = 'url(img/apple_true.jpg)'; //установили новую картинку

// Меняем заголовок

let title = document.getElementById("title"); // получаем элемент по id 

title.innerHTML = 'Мы продаём только подлинную технику Apple';

// удаляем рекламу со страницы

let column = document.querySelectorAll('.column'), // создаём псевдомассив column
   del = document.querySelector('.adv'); //создаем псевдомассив del 
    // элементов column на html странице - 2 шт 
// первый - пустой, второй - содержит элементы класса title и adv 
   column[1].removeChild(del);

// Спрашиваем пользователя 
//
function ques(){

   let question = '';
   while( !isNaN(question) || typeof(question) === null || question == '' ){
      question = prompt(' Как Вы относитесь к технике Apple? ', '');
   }
   let promp = document.getElementById('prompt');
   promp.style.fontSize = '30pt';
   promp.innerHTML = question;
}
 setTimeout(ques, 5000); // ставлю задержку появления, окна с вопросом
