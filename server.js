const Express = require("express");
const Socket = require("socket.io");
// const UUID = require("node-uuid");

const Dotenv = require("dotenv");
Dotenv.config();

const App = Express();

const Server = App.listen(process.env.PORT, function () {
  console.log("Listening on port " + process.env.PORT);
});

App.use(Express.static("public"));

var IO = Socket(Server);

setInterval(function () {
  //send game state to all connected sockets
  IO.sockets.emit("state");
}, 1000 / 30);

IO.on("connection", function (socket) {
  console.log("socket connection made", socket.id);
  //create player upon connection
  players[socket.id] = Player("", socket.id);

  //game loop
  setInterval(function () {
    update();
  }, 1000 / FPS);

  //when a new player message is sent
  socket.on("spawn", function (data) {
    //add a new player to the game
    players[socket.id].name = data;
    players[socket.id].respawn();
    // console.log("new player added " + socket.id)
  });

  //when a movement message is received updates the players position
  socket.on("movement", function (data) {});

  //when the user sends a shoot message(receives mouse location as data)
  socket.on("shoot", function (data) {
    //only allows a bullet to be spawned if the user has spawned
    if (players[socket.id] != undefined && players[socket.id].alive) {
      var player = players[socket.id];
      //creates a projectile and adds it to server side projectile array
      //only spawns a bullet if the player has less than 3 on screen already
      console.log(players[socket.id].alive);
      if (player.projectiles.length < 5) {
        projectiles.push(player.shoot(data));
        // console.log("spawning projectile");
        // console.log(projectiles);
      }
    } else {
      console.log("spawn before shooting");
    }
  });

  //listens for "game events"
  socket.on("game", function (data) {
    console.log(data, socket.id);
  });

  //removes the player from the array when they disconnect
  socket.on("disconnect", function () {
    delete players[socket.id];
  });
});
