FROM node:7.7.2
WORKDIR /my_express
RUN npm init -y
RUN npm install express-generator -g
# .gitignoreの追加
# viewエンジンにpugを使用
RUN express myapp --git --pug --view pug 
WORKDIR /my_express/myapp
RUN npm install body-parser --save
RUN npm install cookie-parser --save
RUN npm install debug --save
RUN npm install morgan --save
RUN npm install serve-favicon --save
RUN npm install pug --save
RUN npm install helmet --save
RUN npm install express@5.0.0-alpha.5 --save