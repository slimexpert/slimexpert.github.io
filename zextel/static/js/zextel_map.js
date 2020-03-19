ymaps.ready(function () {

    var map = new ymaps.Map('map', {
            center: [55.79, 37.64],
            zoom: 10,
            controls: ['zoomControl']
        }),
        objectManager = new ymaps.ObjectManager();

    map.controls.get('zoomControl').options.set({size: 'small'});

    // Загружаем GeoJSON файл, экспортированный из Конструктора карт.
    $.getJSON('https://slimexpert.github.io/zextel/static/js/main1.geojson')
    	.done(function (geoJson) 
    	{
           // Добавляем описание объектов в формате JSON в менеджер объектов.
        	objectManager.add(geoJson);
            // Добавляем объекты на карту.
        	map.geoObjects.add(objectManager);
        });
});