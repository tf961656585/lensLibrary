@echo off
REM 切换到内层项目目录
pushd "%~dp0\lensLibrary"

REM 如果 node_modules 不存在，则安装依赖
IF NOT EXIST node_modules (
    echo 正在安装依赖...
    npm install
)

echo 正在启动开发服务器...
npm run dev 