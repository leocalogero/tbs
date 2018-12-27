console.log('test');

var bikeApp = {};

bikeApp.stations = [];

bikeApp.events = function () {

    $.ajax({
        url: 'https://api.citybik.es/v2/networks/toronto',
        method: 'GET',
        dataType: 'json',
        data: {
            format: 'json'
        }
    }).then(function (res) {

        let bikeData = res.network.stations;
        bikeApp.populateList(bikeData);
    });
}

bikeApp.populateList = function (bikeData) {

    bikeData.forEach(function (station) {
        
        options.data.push(station.name);
        
        bikeApp.stations.push(station);

    });

};

bikeApp.formEvent = function () {

    $('form').on('submit', function (e) {

        var usersInput = $('.usersLocay').val();

        e.preventDefault();
        
        bikeApp.displayData(usersInput);

    });

}


bikeApp.displayData = function (usersInput, e) {

    var usersInput = usersInput;

    bikeApp.stations.forEach(function (station, ) {

        if (usersInput === station.name) {

            $('.choosenStation').html(`${station.name}`);

            $('.freeBikes').html(`${station.empty_slots}`);

            $('.emptySlots').html(`${station.free_bikes}`);

        }

    });

}

var options = {
    data: [],
    list: {
        match: {
            enabled: true
        }
    }
};

$("#match").easyAutocomplete(options);

$('#toggler').click(function(){
    if($('link#styles').attr('href')=="day.css"){
        $('link#styles').attr('href','night.css')
    }
    else
    {
        $('link#styles').attr('href','day.css')
    }
})

bikeApp.init = function () {
    bikeApp.events();
    bikeApp.formEvent();
};



$(function () {
    bikeApp.init();
});

