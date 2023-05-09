import AddDataPage from './AddDataPage.svelte';
import acpa from '$lib/test/acpa-cleft-care.json'
console.log(acpa);

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'AddData/default',
  component: AddDataPage
};


export const AddSourceAndLayer = {
  args: {
    title: 'Add a Source',
    codeBlock: `<todo/>`,
    content: 'come back to this',
    data: acpa,
    layerOpts: {
        type: 'circle',
        paint: {
            "circle-radius": 4,
            "circle-color": "purple"
        },
    }
  }
}

