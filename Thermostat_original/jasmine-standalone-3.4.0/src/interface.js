$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})


  $('p').css('background-color', '#29d9ff').css('color', '#666666');

  $(":button").css('background-color', '#1aff9d').css('color', '#000000');

  $(".bg").css("background-image", "url('images/reservoir-dogs.jpg')");

  $('p').css({"border-color": "#C1E0FF", 
             "border-weight":"1px", 
             "border-style":"solid",
             "border-radius":"1-px",
            });

  $('button').css("border-radius", '30px');

  // $(".bg").css("background-image", url("https://images.pexels.com/photos/412462/pexels-photo-412462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

});