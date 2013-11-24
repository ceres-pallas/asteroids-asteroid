var expect = require('chai').expect;

var Asteroid = require('../lib/asteroid.js')

describe('Asteroid', function(){
    it('should exist', function(){
	expect(Asteroid).to.exist;
    });

    it('should be a constructor', function(){
	expect(Asteroid).to.be.a('function');
    });

    it('should be an instanceof Velocity', function(){
	expect(new Asteroid()).to.be.an.instanceof(require('asteroids-velocity'));
    });

    describe('initializer', function(){
	it('should call the initalizer', function(done){
	    var asteroid = new Asteroid(function(){ done(); });
	});
    });
});
