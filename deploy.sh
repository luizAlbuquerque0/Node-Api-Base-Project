#!/bin/bash

echo '|-------------------------------------------------------------------|'
echo '|   Starting deploy...                                              |'
echo '|-------------------------------------------------------------------|'
echo '|  ____ ____ ____ ____ ____ ____                                    |' 
echo '| ||D |||e |||p |||l |||o |||y ||                                   |'
echo '| ||__|||__|||__|||__|||__|||__||                                   |'
echo '| |/__\|/__\|/__\|/__\|/__\|/__\|                                   |'
echo '|                                                                   |'
echo '|                 Deploying Express + TypeScript 🚀                 |'
echo '|-------------------------------------------------------------------|'
echo '|'

echo '|--------------------|'
echo '|   Going to dir     |'
echo '|--------------------|'
cd "$TARGET_DIR" || exit 1
pwd
echo '|'

if ! test -f ./.env.prod; then
  echo '| [ERROR]: .env.prod file not found'
  echo '|-----------------------------------|'
  echo '|  End of deploy.                   |'
  echo '|-----------------------------------|'
  exit 1
fi

echo '|'
echo '|-------------------------------|'
echo '|   Updating repository data    |'
echo '|-------------------------------|'
git pull
echo '|'

echo '|----------------------------------|'
echo '|   Updating the app on container  |'
echo '|----------------------------------|'
docker compose up -d --build app
echo '|'

echo '|--------------------|'
echo '|   Cleaning cache   |'
echo '|--------------------|'
docker image prune -f
docker system prune -f
docker volume prune -f
echo '|'

echo '|-------------------------------------------------------------------|'
echo '|                                                                   |'
echo '|    ____                        __                                 |'
echo '|   / __ \___  _________  ____  / /__  _____                        |'
echo '|  / /_/ / _ \/ ___/ __ \/ __ \/ / _ \/ ___/                        |'
echo '| / _, _/  __/ /__/ /_/ / /_/ / /  __/ /                            |'
echo '|/_/ |_|\___/\___/\____/\____/_/\___/_/                             |'
echo '|                                                                   |'
echo '|                     Express backend is live 🎉                    |'
echo '|                                                                   |'
echo '|-------------------------------------------------------------------|'
