#!/bin/sh

#This file is used to make sure the SQL database is online before we even try to bring
#the backend online as it requires the DB to be online first.
echo "Waiting for MySQL..."

while ! nc -z mysql 3306; do
  sleep 1
done

echo "MySQL is up - starting app"
npm run runbackend
