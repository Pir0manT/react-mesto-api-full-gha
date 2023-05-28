#!/bin/bash

# Проверка наличия приложения openssl
if ! which openssl > /dev/null; then
  echo "Error: OpenSSL is not installed"
  echo "To install OpenSSL, please use your package manager, for example:"
  echo "  - On Debian/Ubuntu: sudo apt-get install openssl"
  echo "  - On Fedora/Red Hat/CentOS: sudo yum install openssl"
  echo "  - On macOS (with Homebrew installed): brew install openssl"
  exit 1
fi

# Проверка наличия и длины секретной строки в файле .env
if ! grep -q "^JWT_SECRET=.\{32\}" .env.local; then
  # Генерация секретной строки и добавление ее в файл .env
  echo "JWT_SECRET=$(openssl rand -base64 32)" >> .env
fi

# Запуск docker-compose
docker-compose up -d
