# chat
A simple chatting application with nodejs,socket.io and express framework
## Getting started

1.Firstly,nodejs and npm must be installed.
2.For a walkthrough on that,refer [this](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)

2.The packages we would be needing for this application are server.io and express

3.You can download them from npm using the following code in a package.json file in the same directory.

'''
   
    "name": "sampe.js",
    "version": "0.0.1",
    "description": "App",
    "dependencies": {
        "socket.io": "latest"
        "express":"latest"
    },
    "author": "developer"
}
'''

## Moving forward
1. Now,locate where the local server hosts

2.In Ubuntu 14.04,it is traditionally served from /home/home

3.Download sampe.js,index.html and other files

4.index.html takes care of the client side and sampe.js takes care of the sever side.

## Execution

1.Here we are listening to port 3000

2.Always listen to a port number higher than the admin's

3.Type
'''
node sampe.js

'''
in the terminal

### The code  would be up and running!

# Step by Step description with images

#### Initialising Node

![alt text](https://raw.githubusercontent.com/AkshayaKL/chat/master/startingnode.png)

#### User A opens our chat webapp


![alt text](https://github.com/AkshayaKL/chat/blob/master/userAlogsin.png?raw=true)

#### User A gets to type in a message


![alt-text](https://github.com/AkshayaKL/chat/blob/master/userasmessageform.png)

#### User B logs in


![alt-text](https://github.com/AkshayaKL/chat/blob/master/userblogsin.png)

#### User B gets to type in a message

![alt-text](https://github.com/AkshayaKL/chat/blob/master/userbsmessageform.png)

#### They send messages to each other.Multiple users can connect 

![alt-text](https://github.com/AkshayaKL/chat/blob/master/messages1.png)

![alt-text](https://github.com/AkshayaKL/chat/blob/master/messages2.png)


