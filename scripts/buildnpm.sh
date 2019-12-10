#!/bin/bash
components=$(ls ./packages)
for component in ${components[*]}
do
  rm -rf $component
  mkdir $component
  npx babel ./packages/$component/src/*.component.js -d ./$component --copy-files
  cp -r ./packages/$component/css ./$component
  mv ./$component/*.js ./$component/index.js
done
