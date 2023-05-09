import AddDataPage from './AddDataPage.svelte';
import acpa from '$lib/test/acpa-cleft-care.json'
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

