import GeocodePage from './GeocodePage.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'MapContainer/Geocode',
  component: GeocodePage
};


export const AddGeocoder = {
    args: {
      addGeocoder: true,
      title: 'Add a Geocoder',
      codeBlock: `<MapContainer addGeocoder={true}>`,
      content: `content here`
    }
  }

  export const GeocodeOptions = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            flyTo: false
        },
        title: 'Change Geocoder Options',
        codeBlock: `<MapContainer addGeocoder={true} geocodeOpts={{flyTo: false}}`
    }
  }

