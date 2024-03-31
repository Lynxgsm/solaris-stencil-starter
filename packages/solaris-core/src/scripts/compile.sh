#!/bin/bash
for file in src/common/styles/base/*.scss; do
  filename=$(basename "$file" .scss)
  filename=${filename#_}
  sass "${file}" "dist/styles/${filename}.css" --style compressed
done

sass "src/common/styles/components/index.scss" "dist/styles/solaris.css" --style compressed
