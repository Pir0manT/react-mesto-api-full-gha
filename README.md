[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# Фронтенд и Бэкенд проекта Место
### *Учебный проект от [Яндекс.Практикум](https://practicum.yandex.ru/web/)*

## Описание проекта
Репозиторий для приложения проекта Mesto, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории backend/, а фронтенд - в frontend/. В этом интерактивном приложении делятся фотографиями, удаляют их и ставят лайки.

## Функционал:
- Редактирование аватара и профиля;
- Добавление фотографии и лайков;
- Удаление фотографии и лайков;
- Открытие фотографии в полном размере;
- Авторизация и регистрация пользователей.

## Стек технологий:
### Frontend:
- HTML5;
- CSS3:
    - Flexbox;
    - Grid Layout;
    - Positioning;
    - Adaptive UI;
    - Media Queries;
- Методология БЭМ;
- Фйловая структура Nested БЭМ;
- JavaScript:
    - Стиль CamelCase;
    - Объектно-ориентированное программирование;
    - Промисы (Promise);
    - Асинхронность и оптимизация;
    - Rest API;
- Webpack;
- React JS:
    - Create React App;
    - Портирование разметки в JSX;
    - Функциональные компоненты;
    - Хуки.

### Backend:
- Node.js;
- Express;
- MongoDB;
- Сelebrate;
- Winston;
- Grafana+Loki.

### Deploy:
- Docker;
- Docker Compose;
## Установка и запуск приложения:

Наиболее быстрый и удобный способ развернуть и запустить приложение - использование 
Docker. 

Клонировать репозиторий:

    git clone https://github.com/Pir0manT/react-mesto-auth.git

Отредактировать файл конфигурации сервера Nginx в каталоге: 

    /frontend/.nginx/nginx.conf

при необходимости иcпользовать https-протокол скопировать файлы сертификатов
в каталог

    /frontend/.nginx/certs
    

Запустить скрипт, который установит все необходимые зависимости:

    bash ./start.sh

При первом запуске скрипта потребуется ввести полные имена доменов (FQDN) где будут располагаться Fronend и Backend приложения.
Будьте внимательны! Все значения переменных окружения будут сохранены в .env файл.
Если впоследствии в .env или nginx.conf будут вноситься изменения, не забудьте перезапустить приложение командой:

    docker-compose up --build -d

Чтобы остановить запущенное приложение, используйте скрипт:

    bash ./stop.sh

По умолчанию, Fronten запускается на порту 80 а Backend на порту 3000. Чтобы изменить это поведение, отредактируйте файл:

    docker-compose.yaml

и перезапустите приложение.

## Список переменных окруения, которые необходимы для корректной сборки и работы приложения:
- JWT_SECRET /* Строка секретногот ключа для подписи токена */
- BASE_URL /* Полное доменное имя (FQDN) сайта */ 
- REACT_APP_API_BASE_URL /* Полное доменное имя (FQDN) API */
- LOGGER_BASE_URL /* Полное доменное имя (FQDN) сервиса логирования */
- DB_PATH /* Полное доменное имя (FQDN) сервера БД Mongo */

## Сервис логирования GRAFANA+LOKI

По умолчанию приложение использует сервис логирования Grafana+Loki. Для просмотра логов приложения перейдите по адресу:

    https://<site-name>/logs/
    user: admin
    password: admin

При первом входе в Grafana не забудьте изменить пароль по умолчанию на собственный!


## Макеты Проектной работы в Figma:
- [Макет 4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4);
- [Макет 5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5);
- [Макет 6-7](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6);
- [Макет 9](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint);
- [Макет 12](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/JavaScript.-Sprint-12).

## Чеклисты Проектной работы:
- [Чеклист 4](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-4/index.html);
- [Чеклист 5](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-5/index.html);
- [Чеклист 6](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-6/index.html);
- [Чеклист 7](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-7/index.html);
- [Чеклист 8](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-8/index.html);
- [Чеклист 9](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-9/index.html);
- [Чеклист 10](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-10/index.html);
- [Чеклист 11](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-11/index.html);
- [Чеклист 12](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-12/index.html);
- [Чеклист 13](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-13/index.html);
- [Чеклист 14](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-14/index.html);
- [Чеклист 15](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-15/index.html).


## Ссылки:
- Frontend https://mesto.top61.ru/
- Backend https://api-mesto.top61.ru/
- Logger https://mesto.top61.ru/logs/
- IP 95.31.196.116

