var socket = io.connect();

var movement = {
  up: false,
  down: false,
  left: false,
  right: false,
};

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});

//refactor function and import callback?
document.addEventListener("keyup", function (event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});

setInterval(function () {
  for (const key in movement) {
    if (movement[key] === true) {
      socket.emit("movement", movement);
    }
  }
}, 1000 / 30);

var socketId;
socket.on("connect", function () {
  socketId = socket.id;
  console.log(socketId);
});

socket.on("state", function (players, projectiles) {
  //render visuals based on state emitted by server

  //updates all player locations
  for (var id in players) {
    var player = players[id];
  }
});
