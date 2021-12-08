#!/bin/bash

docker build ./server/ -t nodewithchai:latest
export NODE_ENVIRONMENT=dev
export NODE_API_VOLUME=./server
docker-compose up -d
