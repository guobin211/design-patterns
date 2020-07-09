#!/bin/bash

project_path=$(cd "$(dirname "$0")" || exit ; pwd)
project_name="${project_path##*/}"

echo "$project_path"
echo "$project_name"

read -r -p "请输入文件路径: " file_path

printf '你输入的文件名是: \t%s\n' "$file_path"
