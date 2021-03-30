#!/bin/sh
docker run \
    -itd \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 1337:80 \
    -e CHOKIDAR_USEPOLLING=true \
    prettycite:prod