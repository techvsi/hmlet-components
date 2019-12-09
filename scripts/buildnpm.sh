#!/bin/bash
components=$(ls ./packages)
for component in ${components[*]}
do
  rm -f ./packages/$component/dist/
  mkdir ./packages/$component/dist/
  npx babel ./packages/$component/src/*.component.js -d ./packages/$component/dist/ --copy-files
done
