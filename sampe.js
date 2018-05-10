var app=require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var clients=0;
users=[];
connections=[];
app.get('/',function(req,res){res.sendFile(__dirname+"/index.html");
});
io.on('connection', function(client){
	    connections.push(client);
       clients++;
       client.emit('numberonline',clients);
       client.on('name', function(name){client.emit('name',name);client.join(name);});
  client.on('chat', function(msg){io.emit('chat',{msg:msg,user:client.username});client.emit('numberonline',clients);});
  client.on('disconnect', function(){clients--;client.emit('numberonline',clients);
  
  users.splice(users.indexOf(client.username),1);
  updateUsernames();
  client.on('connect',function(){client.emit('numberonline',clients);})

});
  
  client.on('new user',function(data,callback){
  	callback(true);
  	client.username=data;
  	users.push(client.username);
  	updateUsernames();
  });

  function updateUsernames(){
  	io.sockets.emit('get Users',users);
  }

});

io.on('disconnect',function(){console.log('user is disconnected');

});
server.listen(3000, function(){console.log('Listening on Port 3000')});
