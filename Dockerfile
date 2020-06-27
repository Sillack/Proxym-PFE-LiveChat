FROM nginx:1.17.1-alpine
COPY /dist/chat-conference-plugin /usr/share/nginx/html
