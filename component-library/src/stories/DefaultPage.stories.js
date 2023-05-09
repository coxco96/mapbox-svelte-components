import DefaultPage from './DefaultPage.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'MapContainer/default',
  component: DefaultPage
};


export const DefaultMapContainer = {
  args: {
    title: 'Default Map Container',
    codeBlock: `<MapContainer/>`,
    content: 'come back to this'
  }
}


