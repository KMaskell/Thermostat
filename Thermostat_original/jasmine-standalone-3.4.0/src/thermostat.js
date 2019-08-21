'use strict';

//we've created a Thermostat Object Constructor and given it a property 
//of temperature
function Thermostat(){
  this.temperature = 20;
}
// then we use prototype keyword to bind gCT funtion to our thermostat:
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  return this.temperature += 1;
};

Thermostat.prototype.down = function(){
  return this.temperature -= 1;
};