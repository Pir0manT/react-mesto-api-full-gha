#!/bin/bash

# Проверка установлен ли Docker
if ! [ -x "$(command -v docker)" ]; then
  echo 'Docker не установлен. Установка...'
  sudo apt-get update
  sudo apt-get install -y docker.io
fi

# Проверка установлен ли Docker Compose
if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Docker Compose не установлен. Установка...'
  sudo apt-get update
  sudo apt-get install -y docker-compose
fi

# Проверка установлен ли OpenSSL
if ! [ -x "$(command -v openssl)" ]; then
  echo 'OpenSSL не установлен. Установка...'
  sudo apt-get update
  sudo apt-get install -y openssl
fi

# Проверка существует ли файл .env в текущем каталоге
if [ ! -f .env ]; then
  echo 'Создание файла .env...'
  touch .env
fi

# Проверка установлена ли переменная API_BASE_URL в файле .env и соответствует ли она указанным правилам
api_base_url=$(grep "API_BASE_URL" .env | cut -d '=' -f2)
if [[ -z $api_base_url ]] || [[ $api_base_url != https:* ]] || [[ $api_base_url == */ ]]; then
  # Запрос значения переменной API_BASE_URL у пользователя
  while true; do
    read -p "Пожалуйста, введите значение для API_BASE_URL (должно начинаться с https: и не заканчиваться на /): " api_base_url
    if [[ $api_base_url == https:* ]] && [[ $api_base_url != */ ]]; then
      break
    else
      echo "Неверное значение. Попробуйте еще раз."
    fi
  done

  # Запись переменной API_BASE_URL в файл .env
  sed -i "/API_BASE_URL/d" .env # Удаление старого значения переменной API_BASE_URL из файла .env (если оно есть)
  echo "API_BASE_URL=$api_base_url" >> .env # Добавление нового значения переменной API_BASE_URL в файл .env
fi

# Проверка наличия и длины секретной строки в файле .env
if ! grep -q "^JWT_SECRET=.\{32\}" .env; then
  # Генерация секретной строки и добавление ее в файл .env
  echo "JWT_SECRET=$(openssl rand -base64 32)" >> .env
fi

# Запуск docker-compose
docker-compose up -d
