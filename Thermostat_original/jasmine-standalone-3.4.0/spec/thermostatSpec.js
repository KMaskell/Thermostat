'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  
  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

    describe('temperature can be changed', function(){

      it('user can increase temperature with up()', function(){
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
      });

      it('user can decrease temperature with down()', function(){
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
      });
    });
});
