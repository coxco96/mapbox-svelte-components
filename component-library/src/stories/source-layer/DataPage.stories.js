import DataPage from './storybook-components/DataPage.svelte';
import acpa from '$lib/test/acpa-cleft-care.json'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: '<SourceLayer>/data',
  component: DataPage
};

export const AddData = {
  args: {
    title: 'Data passed in (nothing to see, though)',
    codeBlock: `<MapContainer data={acpa}/>`,
    data: acpa,
  }
}
