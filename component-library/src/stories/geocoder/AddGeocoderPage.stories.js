import AddGeocoderPage from './storybook-components/AddGeocoderPage.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: '<Geocoder>/addGeocoder',
  component: AddGeocoderPage
};


export const AddAGeocoder = {
    args: {
      addGeocoder: true,
      title: 'Add a Geocoder',
      codeBlock: `<MapContainer addGeocoder={true}>`,
    }
  }

