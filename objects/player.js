//function for creating a new player object
var Player = function (name, socketId, colour) {
  var self = {
    socketId: socketId,
    health: 3,
    name: name,

    alive: false,
    //location should be random coordinates
    location: {
      x: Math.floor(Math.random() * 400) + 1,
      y: Math.floor(Math.random() * 400) + 1,
    },
    //dont know if this should be tracked yet
    kills: 0,
    deaths: 0,
    //creates a projectile
    shoot: function (destination) {
      if (this.alive) {
        var projectile = Projectile(
          this.socketId,
          this.location,
          this.calcProjectileVector(destination),
          this.projectiles.length
        );

        this.projectiles.push(projectile);
        // console.log(projectile);
        return projectile;
      }
    },
  };
  return self;
};

module.exports = Player;
