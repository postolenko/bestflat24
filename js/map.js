ymaps.ready(function () {
    if($("#map").length > 0) {
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
    }
// });

// ymaps.ready(function () {

    if($("#map_2").length > 0) {
        var myMap2 = new ymaps.Map('map_2', {
            center: [55.755814, 37.617635],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });

        myPlacemark3 = new ymaps.Placemark([55.755814, 37.617635], {
            hintContent: ''
        }, {
            // iconLayout: 'default#imageWithContent',
            // iconImageHref: 'img/yellow_marker.png',
            // iconImageSize: [39, 35],
            // iconImageOffset: [19, -17]
        });

        myMap2.geoObjects.add(myPlacemark3);
    }


    if($("#map_3").length > 0) {
        var myMap3 = new ymaps.Map('map_3', {
            center: [55.755814, 37.617635],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });

        myPlacemark4 = new ymaps.Placemark([55.755814, 37.617635], {
            hintContent: ''
        }, {
            // iconLayout: 'default#imageWithContent',
            // iconImageHref: 'img/yellow_marker.png',
            // iconImageSize: [39, 35],
            // iconImageOffset: [19, -17]
        });

        myMap3.geoObjects.add(myPlacemark4);
    }

    if($("#map_4").length > 0) {
        var myMap4 = new ymaps.Map('map_4', {
            center: [55.755814, 37.617635],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });

        myPlacemark5 = new ymaps.Placemark([55.755814, 37.617635], {
            hintContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/marker.svg',
            iconImageSize: [37, 48],
            iconImageOffset: [-17, -24]
        });

        myMap4.geoObjects.add(myPlacemark5);
    }

});
