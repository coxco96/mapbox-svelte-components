import AddDataPage from './AddDataPage.svelte';
import acpa from '$lib/test/acpa-cleft-care.json'
import { styles } from '$lib/utils/options/map-style-options.js';
console.log(acpa);

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'AddData/SourceAndLayer',
  component: AddDataPage
};


export const AddSourceAndLayer = {
  args: {
    title: 'Add some Data',
    codeBlock: `<todo/>`,
    content: 'come back to this // this is acpa data',
    data: acpa,
    layerOpts: {
        type: 'circle',
        paint: {
            "circle-radius": 4,
            "circle-color": "yellow"
        },
    },
    mapOpts: {
        center: [-95, 41],
        zoom: 3.1
    }
  }
}


export const RestyleData = {
    args: {
      title: 'Restyle',
      codeBlock: `<todo/>`,
      content: 'come back to this',
      data: acpa,
      layerOpts: {
          type: 'circle',
          paint: {
              "circle-radius": 9,
              "circle-color": "orange",
              'circle-blur': .7,
              'circle-opacity': .5,
              'circle-stroke-width': .5,
              'circle-stroke-opacity': .1,
              'circle-stroke-color': 'brown'
          },
      },
      mapOpts: {
        center: [-95, 41],
        zoom: 3.1
    }
    }
  }

  export const FillExtrusion = {
    args: {
        title: 'Fill Extrusion Example',
        codeBlock: `todo`,
        content: 'adapted from mapbox api example',
        data:'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson',
        layerOpts: {
            type: 'fill-extrusion',
            paint: {
                'fill-extrusion-color': ['get', 'color'],
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': ['get', 'base_height'],
                'fill-extrusion-opacity': 0.5
            }
        },
        mapOpts: {
            center: [-87.61694, 41.86625],
            zoom: 16.5,
            pitch: 40,
            bearing: 30,
            antialias: true,
            style: styles.light
        }
    }
  }

