# Место

Интерактивный проект с возможностью смотреть фотографии различных мест России после входа в аккаунт.

### Используемые технологии

Проект написан на React, использую Create React App в качестве шаблона. Локально подключены шрифт Inter и файл
normalize. Используются флексбоксы и гриды для построения сеток и выравнивания. Для адаптации к мобильным устройствам
используются медиазапросы. С помощью JavaScript добавлены попапы, через которые можно посмотреть в оригинальном
разрешении фото, а также можно изменить информацию в профиле, добавить новую карточку. Также с помощью JS можно
удалить карточку и поставить лайк. Вся информация также синхронизируется с сервером. Попапы реализованы
с помощью тега `dialog`, добавлена иконка для закрытия попапа без сохранения (также можно закрыть по нажатию
на Esc или по оверлею), а также с помощью JavaScript реализована вся логика при работе с попапами и будет добавлена
валидация для полей ввода. Код на JavaScript частично написан в стиле ООП, а частично в функциональном стиле. Добавлена
авторизация пользователя, без которой невозможно получить доступ к просмотру и добавлению фото.

### Ссылка

https://react-mesto-auth-rakleed.vercel.app/

### Лицензия

[MIT](LICENSE.md).
