#!/bin/bash

export COMMAND="npm run dev-with-docker"
docker-compose build
docker-compose up -d --remove-orphans
