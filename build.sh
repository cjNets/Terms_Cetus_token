#!/bin/bash

set -e

NAME="crema-ido"
GROUP="crema"
VERSION="dirty-version"
IMAGE="harbor.cplus.link/web/$GROUP/$NAME"

# 编译
function Compile() {
    echo "Complie $NAME:$1"
    # yarn
    # npm run generate
    echo "------------------------------------"
}

# build镜像(build要求一定传入版本号)
function Build() {
    echo "Build $NAME:$1"
    #/kaniko/executor --context $(dirname $0) --dockerfile $(dirname $0)/Dockerfile --destination $IMAGE:$1 --cleanup
    docker build -t "$IMAGE:$1" ./
    docker push $IMAGE:$1
    echo "Build $NAME:$1 OK"
    echo "------------------------------------"
}

# 自动部署(deploy要求一定传入版本号)
function Deploy() {
    echo "Deploy $NAME:$1"
    ansible cplus-qa -m shell -a "/data/bin/deploy -g $GROUP -s $NAME -i $IMAGE:$1"
    echo "Deploy $NAME:$1 OK"
    echo "------------------------------------"
}

#
if [[ $(expr match "$2"  'v[0-9].*.[0-9].*.[0-9].*$') != 0 ]];then
    VERSION=$2
else
    VERSION=$2-$COMMIT
fi


if [ "$1" == "build" ];then
    Build $VERSION
elif [ "$1" == "deploy" ];then
    Deploy $VERSION
else
    Compile $VERSION
fi
