# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.194.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
FROM node:16-buster

RUN apt update && apt upgrade -y && apt install default-jdk -y

RUN npm i -g androidjs-builder npm bunyan

ENTRYPOINT npm i 