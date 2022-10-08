'use strict';
$(document).ready(function () {
  let lat;
  let long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      let api =
        'https://fcc-weather-api.glitch.me/api/current?lat=' +
        lat +
        '&lon=' +
        long +
        '';

      $.getJSON(api, function (res) {
        let celsius = res.main.temp;
        let farenheit = celsius * 1.8 + 32;

        let location = res.name;

        $('.weather-location').html(location);
        $('.temp').html(Math.floor(celsius));
        $('.weather-description').html(res.weather[0].description);
        $('.weatherType').attr('id', res.weather[0].main);
        $('.row2').on('click', function () {
          if ($('.temp').html() == Math.floor(celsius)) {
            $('.temp').html(Math.floor(farenheit));
            $('.temp-type').html('°F');
          } else {
            $('.temp').html(Math.floor(celsius));
            $('.temp-type').html('°C');
          }
        });

        //SETTING UP THE ICON
        let icons = new Skycons({
          color: 'white',
        });

        icons.set('Clear', Skycons.CLEAR_DAY);
        icons.set('Clear-night', Skycons.CLEAR_NIGHT);
        icons.set('Partly-cloudy-day', Skycons.PARTLY_CLOUDY_DAY);
        icons.set('Partly-cloudy-night', Skycons.PARTLY_CLOUDY_NIGHT);
        icons.set('Clouds', Skycons.CLOUDY);
        icons.set('Rain', Skycons.RAIN);
        icons.set('Sleet', Skycons.SLEET);
        icons.set('Snow', Skycons.SNOW);
        icons.set('Wind', Skycons.WIND);
        icons.set('Fog', Skycons.FOG);
        icons.play();
      });
    });
  }
});
