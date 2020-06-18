#!/bin/bash

project_path=$(cd `dirname $0`; pwd)
project_name="${project_path##*/}"

echo $project_path
echo $project_name

read -p "请输入文件路径" file_path
echo $file_path
