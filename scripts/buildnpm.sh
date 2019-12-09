#!/bin/bash
rm -rf dist
mkdir dist
mkdir dist/css

components=$(ls ./packages)
for component in ${components[*]}
do
  arr=$(ls ./packages/$component/css/*)
  if [ ${#arr[@]} -gt 0 ]; then
    for css in ${arr[*]}
    do
      cp $css ./dist/css
    done
  fi
done
npm run babel:react
