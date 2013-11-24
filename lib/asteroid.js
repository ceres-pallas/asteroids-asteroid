var Velocity = require('asteroids-velocity');

var doNothing = function(){ /* do nothing */ }

var Asteroid = module.exports = function(initializer){
    Velocity.call(this);
    initializer = initializer || doNothing;
    initializer.call(this, this);
};
Asteroid.prototype = new Velocity();
