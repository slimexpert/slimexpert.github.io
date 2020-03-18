ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [60.027346, 30.661338],
        zoom: 10,
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
            // Указываем координаты вершин многоугольника.
            [30.6922339122011, 60.0883316600952], 
			[30.7052372615053, 60.0856305860998],
			[30.7170389811708, 60.0840226985256],
			[30.7189272563173, 60.0828435309624]
        ],
        // Описываем свойства геообъекта.
        {
            // Содержимое балуна.
            balloonContent: "Рыбные места"
        }, {
				fillColor: '#32CD32',
				// Делаем полигон прозрачным для событий карты.
				//interactivityModel: 'default#transparent',
				strokeWidth: 8,
				opacity: 0.4
			}
    );

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);
    myMap.setBounds(polygon.geometry.getBounds());
}