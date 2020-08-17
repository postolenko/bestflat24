ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.755814, 37.617635],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark1 = new ymaps.Placemark([55.755814, 37.617635], {
        hintContent: ''
    }, {
        // iconLayout: 'default#imageWithContent',
        // iconImageHref: 'img/yellow_marker.png',
        // iconImageSize: [39, 35],
        // iconImageOffset: [19, -17]
    });

    myMap.geoObjects.add(myPlacemark1);
});