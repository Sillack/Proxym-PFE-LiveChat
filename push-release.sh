cd "$(dirname ${BASH_SOURCE[0]})"

VERSION="$(git rev-parse --short HEAD)"
MESSAGE="$(git show --no-patch --format=%s HEAD)"

rm -rf dist
npm run build-lib
cp README.md dist/proxym/ngx-chat
pushd dist/proxym/ngx-chat

npm publish

popd

./push-documentation.sh
