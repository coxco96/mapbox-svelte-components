import {mapbox} from '$lib/utils/mapbox/mapbox.js';
export function horizonMarkers(map) {
    const geojson = {
        'type': 'FeatureCollection',
        'features': [{
                'type': 'Feature',
                'properties': {
                    'name': 'Everest',
                    'height': 8849
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [86.925278, 27.988056]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Denali',
                    'height': 6194
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-151.0074, 63.0695]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Aconcagua',
                    'height': 6961
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-70.0112, -32.653197]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Vinson Massif',
                    'height': 4892
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-85.617147, -78.525483]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Kilimanjaro',
                    'height': 5895
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [37.353333, -3.075833]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Elbrus',
                    'height': 5642
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [42.439167, 43.355]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Puncak Jaya',
                    'height': 4884
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [137.158333, -4.078889]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'name': 'Mauna Kea',
                    'height': 4205
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-155.468056, 19.820667]
                }
            }
        ]
    };
    for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.className = 'marker';
        const size = marker.properties.height;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        // Add a popup displayed on click for each marker
        const popup = new mapbox.Popup({
            offset: 25
        });
        popup.setHTML(
            `<h2>${marker.properties.name}</h2>${marker.properties.height}m<br/>`
        );

        // Add markers to the map.
        new mapbox.Marker({
                element: el,
                // Point markers toward the nearest horizon
                rotationAlignment: 'horizon',
                offset: [0, -size / 2]
            })
            .setLngLat(marker.geometry.coordinates)
            .setPopup(popup)
            .addTo(map);
    }
}