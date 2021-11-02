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

var snakeSpeed=2;
const players = [];//array of player info objects: x,y location and plane etc.
const food = []; //array of food objects with location
const box = []; //dimensions of box to track player locations


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

  //listens for "game events"
  socket.on("game", function (data) {
    console.log(data, socket.id);
  });

  //removes the player from the array when they disconnect
  socket.on("disconnect", function () {
    delete players[socket.id];
  });
});
