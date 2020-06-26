# Proxym-Chat-Plugin

This plugin provides an out-of-the-box XMPP chat component and WebRTC Video/Audio call component.

![alt text](https://i.ibb.co/7VJTQ0j/archi.jpg)

## Features

- connect to XMPP servers via websocket
- send and receive messages
- load messages from message history (XEP-0313)
- One To One Video / Audio call
- supports multi user chat

## Compatibility

- Angular 9

- requires node >= 10.13 && npm >= 5 for build

- MySQL

## Installation

src/app/app.component.ts

```Ejabberd
...

onLogin() {

const logInRequest: LogInRequest = {
            domain: 'your_domain',
            service: 'wss://your_domain:5280/xmpp',
            password: this.password,
            username: this.username,      
};

...
```
- Where your_domain is your Ejabberd server address, e.g : localhost.

## Ejabberd server
```

# repository

https://github.com/processone/ejabberd

# download

Download from https://www.process-one.net/downloads/downloads-action.php?file=/19.02/ejabberd-19.02-linux-x64.run
```
```
chmod +x ejabberd-19.02-linux-x64.run
./ejabberd-19.02-linux-x64.run


- change db from mnesia to mysql server 
CREATE DATABASE ejabberd
GRANT ALL ON ejabberd.* TO 'ejabberd'@'localhost' IDENTIFIED BY 'password'

wget https://raw.githubusercontent.com/processone/ejabberd/master/sql/mysql.sql
mysql -h localhost -D ejabberd -u ejabberd -p < mysql.sql

auth_method: sql
ejabberdctl register "testuser" "localhost" "passw0rd"

```

```
configuration file /ejabberd/conf/ejabberd.yml :

-> https://filebin.net/17k3t0ucnfayk311

certfile /ejabberd/conf/server.pem :

-> https://filebin.net/ap1xf1xq166gjchk

ca_file /ejabberd/conf/cacert.pem :

-> https://filebin.net/szz9yv9p8eoczyp8

```
## MySQL

```
https://raw.githubusercontent.com/processone/ejabberd/master/sql/mysql.sql
```
## Development

```
# clone this repository

git clone git@github.com:pazznetwork/ngx-chat.git
cd Proxym-Chat-Plugin

# install dependencies

npm install

# Build the plugin

Run ng build --watch=true to build the project.The build artifacts will be stored in the dist/ directory.

# will run the application on
# https://localhost:8080

node server.js

```
## Run
```
# run the application on
# https://localhost:8080

node server.js
```
# Code scaffolding
Run ```ng generate component component-name``` to generate a new component.

You can also use ```ng generate directive|pipe|service|class|guard|interface|enum|module```.

## License
[MIT](https://choosealicense.com/licenses/mit/)

