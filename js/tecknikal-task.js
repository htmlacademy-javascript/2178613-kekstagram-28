// Добавить в проект валидацию, проверки введённых данных, чтобы подсказать пользователю, какие данные мы от него ждём, а себе и бэкендеру упростить работу с этими данными.
//
//   Заведите модуль, который будет отвечать за работу с формой.
//
//   Пропишите тегу <form> правильные значения атрибутов method и адрес action для отправки формы на сервер.
//
//   Обратите внимание. В разделе про работу с сетью мы доработаем механизм отправки данных, а пока достаточно правильных атрибутов у тега <form>.
//
// Если форма заполнена верно, то после отправки покажется страница сервера (по адресу из атрибута action тега form) с успешно отправленными данными. Если же форма пропустила какие-то некорректные значения, то будет показана страница с допущенными ошибками. В идеале у пользователя не должно быть сценария, при котором он может отправить некорректную форму.
//
//   Проверьте разметку вашего проекта и добавьте недостающие атрибуты. Например, всем обязательным полям нужно добавить атрибут required. Затем проверьте, правильные ли типы стоят у нужных полей, если нет — проставьте правильные.
//
//   Изучите, что значит загрузка изображения, и как, когда и каким образом показывается форма редактирования изображения. Напишите код и добавьте необходимые обработчики для реализации этого пункта техзадания. В работе вы можете опираться на код показа окна с полноразмерной фотографией, который вы, возможно, уже написали в предыдущей домашней работе.
//
//   Важно. Подстановка выбранного изображения в форму — это отдельная домашняя работа. В данном задании этот пункт реализовывать не нужно.
//
//   После реализуйте закрытие формы.
//
//   Обратите внимание, что при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания. Значение других полей формы также нужно сбрасывать.
//
//   Напишите код для валидации формы добавления изображения, используя библиотеку Pristine (/vendor/pristine). Список полей для валидации:
//   Хэш-теги
// Комментарий
//
// Реализуйте логику проверки так, чтобы, как минимум, она срабатывала при попытке отправить форму и не давала этого сделать, если форма заполнена не по правилам. При желании, реализуйте проверки сразу при вводе значения в поле.
//
//   Как отменить обработчик Esc при фокусе?
//
//   Задача не имеет одного верного решения, однако намекнём на самый простой — использовать stopPropagation для события нажатия клавиш в поле при фокусе.
//   Валидация хеш-тегов?
//
//   Для валидации хэш-тегов вам придётся вспомнить, как работать с массивами. Набор хэш-тегов можно превратить в массив, воспользовавшись методом .split(). Он разбивает строки на массивы. После этого, вы можете написать цикл, который будет ходить по полученному массиву и проверять каждый из хэш-тегов на предмет соответствия ограничениям. Если хотя бы один из тегов не проходит нужных проверок, показывать сообщение об ошибке.
//
//   Поля, не перечисленные в техзадании, но существующие в разметке, особой валидации не требуют.
