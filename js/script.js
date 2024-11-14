$(function(){

  // Плавная прокрутка при нажатии на ссылку меню
  $("nav a").click(function(e) {
    e.preventDefault();
    targetSec = $(this).attr('href').substr($(this).attr('href').indexOf('#')+1);
    if (targetSec) {
      offset = $('.'+targetSec).offset().top - $('header .container').outerHeight();
      $('html, body').animate({ scrollTop: offset }, 1000);
    }
  });

  // Открытие и закрытие popup-окна
  $('.open-callback, .popup-close, .popup-container').on('click', function() {
    $('.popup-callback').toggle();
    $('.popup-callback form').show();
    $('#callback-message').remove();
  });
  $('.popup-container > div').on('click', function(e) {
    e.stopPropagation();
  });

  // Отправка формы на сервер
  $('.popup-callback form').submit(function(e){
    e.preventDefault();
    alert('Проверка валидности заполненных данных и отправка данных на сервер.');
    $(this).after('<p id="callback-message"style="margin-bottom:3em;">Спасибо за Ваше обращение!<br>Мы скоро Вам перезвоним.</p>');
    $(this).hide();
  });

  // Шаблон для ввода номера телефона
  $(".phone").mask("+7 (999) 999-99-99");

});
