#!/bin/sh
echo "Waiting for MySQL..."

while ! nc -z mysql 3306; do
  sleep 1
done

echo "MySQL is up - starting app"
npm run runbackend