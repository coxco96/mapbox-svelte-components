import LayerOptsPage from './storybook-components/LayerOptsPage.svelte';
import acpa from '$lib/test/acpa-cleft-care.json'
import { styles } from '$lib/utils/options/map-style-options.js';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: '<SourceLayer>/layerOpts',
  component: LayerOptsPage
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