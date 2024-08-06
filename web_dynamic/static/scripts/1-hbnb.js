#!/usr/bin/node

$(function () {
  $('input[type="checkbox"]').on('click', function () {
    let checkedAmenities = {};
    $('input[type="checkbox"]:checked').each(function () {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
      console.log(checkedAmenities);
   });
    $('.amenities h4').text(Object.values(checkedAmenities).join(', '));
  });
});
