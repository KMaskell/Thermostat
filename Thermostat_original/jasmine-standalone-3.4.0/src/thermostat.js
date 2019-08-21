'use strict';

//we've created a Thermostat Object Constructor and given it a property 
//of temperature
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
}
// then we use prototype keyword to bind gCT funtion to our thermostat:
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
  return;
  }
  this.temperature -= 1;
  }
// the is function name prefix is JS equiv for Ruby's ?: expect a boolean!
Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

