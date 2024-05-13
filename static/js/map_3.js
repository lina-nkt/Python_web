    // Р¤СѓРЅРєС†РёСЏ ymaps.ready() Р±СѓРґРµС‚ РІС‹Р·РІР°РЅР°, РєРѕРіРґР°
    // Р·Р°РіСЂСѓР·СЏС‚СЃСЏ РІСЃРµ РєРѕРјРїРѕРЅРµРЅС‚С‹ API, Р° С‚Р°РєР¶Рµ РєРѕРіРґР° Р±СѓРґРµС‚ РіРѕС‚РѕРІРѕ DOM-РґРµСЂРµРІРѕ.

    ymaps.ready(init);

    function init() {
        var coordinates = [[55.834017, 37.955833, 'Дом'], [55.821465, 37.796241, 'Кофе']]

        // РЎРѕР·РґР°РЅРёРµ РєР°СЂС‚С‹.
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
        var myMap = new ymaps.Map("map", {
            // РљРѕРѕСЂРґРёРЅР°С‚С‹ С†РµРЅС‚СЂР° РєР°СЂС‚С‹.
            // РџРѕСЂСЏРґРѕРє РїРѕ СѓРјРѕР»С‡РЅРёСЋ: В«С€РёСЂРѕС‚Р°, РґРѕР»РіРѕС‚Р°В».
            center: [49.084340, 8.944410],
            // РЈСЂРѕРІРµРЅСЊ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ. Р”РѕРїСѓСЃС‚РёРјС‹Рµ Р·РЅР°С‡РµРЅРёСЏ:
            // РѕС‚ 0 (РІРµСЃСЊ РјРёСЂ) РґРѕ 19.
            zoom: 7,
            // Р­Р»РµРјРµРЅС‚С‹ СѓРїСЂР°РІР»РµРЅРёСЏ
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
            controls: [

                'zoomControl', // РџРѕР»Р·СѓРЅРѕРє РјР°СЃС€С‚Р°Р±Р°
                'rulerControl', // Р›РёРЅРµР№РєР°
                'routeButtonControl', // РџР°РЅРµР»СЊ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёРё
                'trafficControl', // РџСЂРѕР±РєРё
                'typeSelector', // РџРµСЂРµРєР»СЋС‡Р°С‚РµР»СЊ СЃР»РѕРµРІ РєР°СЂС‚С‹
                'fullscreenControl', // РџРѕР»РЅРѕСЌРєСЂР°РЅРЅС‹Р№ СЂРµР¶РёРј

                // РџРѕРёСЃРєРѕРІР°СЏ СЃС‚СЂРѕРєР°
                new ymaps.control.SearchControl({
                    options: {
                        // РІРёРґ - РїРѕРёСЃРєРѕРІР°СЏ СЃС‚СЂРѕРєР°
                        size: 'large',
                        // Р’РєР»СЋС‡РёРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РёСЃРєР°С‚СЊ РЅРµ С‚РѕР»СЊРєРѕ С‚РѕРїРѕРЅРёРјС‹, РЅРѕ Рё РѕСЂРіР°РЅРёР·Р°С†РёРё.
                        provider: 'yandex#search'
                    }
                })

            ]
        });
        for (var i of coordinates) {
            myMap.geoObjects.add(new ymaps.Placemark([i[0], i[1]], {balloonContent: i[2]}));
        }
        var routeLine = new ymaps.Polyline(coordinates, {}, {strokeWidth: 4, strokeColor: '#8b00ff'});
        myMap.geoObjects.add(routeLine);
        myMap.setBounds(myMap.geoObjects.getBounds());
        // Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
        //var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
            // РҐРёРЅС‚ РїРѕРєР°Р·С‹РІР°РµС‚СЃСЏ РїСЂРё РЅР°РІРµРґРµРЅРёРё РјС‹С€РєРѕР№ РЅР° РёРєРѕРЅРєСѓ РјРµС‚РєРё.
        //    hintContent: 'РєР»РёРєРЅРёС‚Рµ РїРѕ РјРµС‚РєРµ С‡С‚РѕР±С‹ СѓР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ',
            // Р‘Р°Р»СѓРЅ РѕС‚РєСЂРѕРµС‚СЃСЏ РїСЂРё РєР»РёРєРµ РїРѕ РјРµС‚РєРµ.
        //    balloonContent: 'РЎРѕРґРµСЂР¶РёРјРѕРµ РјРµС‚РєРё'
        //});

        // РџРѕСЃР»Рµ С‚РѕРіРѕ РєР°Рє РјРµС‚РєР° Р±С‹Р»Р° СЃРѕР·РґР°РЅР°, РґРѕР±Р°РІР»СЏРµРј РµС‘ РЅР° РєР°СЂС‚Сѓ.
        //myMap.geoObjects.add(myPlacemark);
    }
