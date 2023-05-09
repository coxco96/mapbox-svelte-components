import MapContainer from '$lib/components/MapContainer.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Examples/MapContainer',
  component: MapContainer
};


export const Map = {
    args: {
      title: 'Change Map Style',
      codeBlock: 
`<MapContainer/>`,
      content: 'come back to this'
    }
  }

