import GeocoderOptions from './GeocoderOptions.svelte';
import {styles} from '$lib/utils/options/map-style-options.js'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Geocoder/geocoderOpts',
  component: GeocoderOptions
};

export const TurnOffFlyTo = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            flyTo: false
        },
        title: 'enableGeolocation: true',
        codeBlock: `<MapContainer addGeocoder={true} geocodeOpts={{clearOnBlur: true}}`
    }
  }

  export const enableGeolocation = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            enableGeolocation: true
        },
        title: 'enableGeolocation: true',
        codeBlock: `<MapContainer addGeocoder={true} geocodeOpts={{enableGeolocation: true}}`
    }
  }

  export const MultipleOpts = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            enableGeolocation: true,
            flyTo: {
                curve: 1.75,
                pitch: 70,
                bearing: -60,
                padding: 200
            },
            zoom: 14.85
        },
        mapOpts: {
            style: styles.courtEarthy,
            projection: 'globe',
            zoom: 1
        },
        title: 'flyTo: false',
        codeBlock: `todo`,
        content: 'todo // combines mapOpts and geocoderOpts'
    }
  }

