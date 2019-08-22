$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

    // function displayWeather(city) {
    //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    //   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    //   var units = '&units=metric';
    //   $.get(url + token + units, function(data) {
    //     $('#current-temperature').text(data.main.temp);
    //   })
    
    //   $('#select-city').submit(function(event) {
    //     event.preventDefault();
    //     var city = $('#current-city').val();
    //     displayWeather(city);
    //   })


  $('p').css('background-color', '#29d9ff').css('color', '#ffffff');

  $(":button").css('background-color', '#1aff9d').css('color', '#000000');

  //$(".bg").css("background-image", "url('images/reservoir-dogs.jpg')");

  $('p').css({"border-color": "#C1E0FF", 
             "border-weight":"1px", 
             "border-style":"solid"
            });

});