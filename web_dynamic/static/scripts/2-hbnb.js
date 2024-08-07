#!/usr/bin/node

$(function () {
  $('input[type="checkbox"]').on('click', function () {
    const checkedAmenities = {};
    $('input[type="checkbox"]:checked').each(function () {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
      console.log(checkedAmenities);
    });
    $('.amenities h4').text(Object.values(checkedAmenities).join(', '));
  });
});

$(function () {
  const url = 'http://127.0.0.1:5001/api/v1/status/';

  function getAPIStatus () {
    $.get(url, function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log('Request failed:', textStatus, errorThrown);
      $('#api_status').removeClass('available');
    });
  }
  getAPIStatus();
});
