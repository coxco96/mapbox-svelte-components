import MapContainer from '$lib/components/MapContainer.svelte';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'test/MapContainer',
  component: MapContainer,
  tags: ['autodocs'],
};


export const Default = {}

export const ChangeMapStyle = {
    args: {
      mapOpts: {
        'style': 'mapbox://styles/mapbox/light-v10'
      }
    }
  }

  export const TurnOffInteractivity = {
    args: {
      mapOpts: {
        'interactive': false,
        'style': 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh'
      }
    }
  }

  export const ChangeMultipleOptions = {
    args: {
      mapOpts: {
        'projection': 'globe',
        'zoom': 0,
        'style': 'mapbox://styles/coxco96/clam405uw000215qwfzg4hejq'
      }
    }
  }