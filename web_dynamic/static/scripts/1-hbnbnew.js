<<<<<<< HEAD
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
=======
$(document).ready(function() {
    let checkedAmenities = [];

    $('input[type="checkbox"]').on('change', function() {
        let amenityId = $(this).data('id');
        
        if ($(this).is(':checked')) {
            if (!checkedAmenities.includes(amenityId)) {
                checkedAmenities.push(amenityId);
            }
        } else {
            checkedAmenities = checkedAmenities.filter(id => id !== amenityId);
        }

        updateAmenitiesHeader();
    });

    function updateAmenitiesHeader() {
        let checkedAmenitiesText = checkedAmenities.map(id => {
            return $(`input[data-id="${id}"]`).next('label').text();
        }).join(', ');

        $('#amenities-header').text(`Amenities: ${checkedAmenitiesText}`);
    }
});
>>>>>>> 6bd87d47b8d0bb6fe2e894fd61f615a8480a4546
