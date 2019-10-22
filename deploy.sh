#!/bin/sh

BRANCH = ss74

git fetch origin/$BRANCH

HASH=$(git rev-parse HEAD)

REMOTE_HASH=$(git rev-parse --verify origin/$BRANCH)

if [ HASH == REMOTE_HASH ]; then
    echo "변경 된 파일 없음"
    exit
fi

git merge origin/ss74
echo "merge 완료"

docker-compose down
docker-compose build
docker-compose up
echo "재배포 완료"
