#!/bin/bash

for filename in ./*.html; do
    echo "converting file: $filename... to ${filename%.*}.haml"
    html2haml --ruby19-attributes $filename views/${filename%.*}.haml
    sed -i.bak 's/public\/css/css/' views/${filename%.*}.haml
    sed -i.bak 's/public\/js/js/' views/${filename%.*}.haml
    sed -i.bak 's/public\/images/images/' views/${filename%.*}.haml
    rm views/${filename%.*}.haml.bak
done
