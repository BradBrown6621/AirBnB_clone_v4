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