'use strict';

//we've created a Thermostat Object Constructor and given it a property 
//of temperature
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}
// then we use prototype keyword to bind gCT funtion to our thermostat:
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
  }

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
// our getter method for powersavingmode:
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function(){
  return this.powerSavingMode = true;
}

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

