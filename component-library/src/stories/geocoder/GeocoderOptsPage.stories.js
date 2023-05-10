import GeocoderOpts from './storybook-components/GeocoderOptsPage.svelte' 
import {styles} from '$lib/utils/options/map-style-options.js'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: '<Geocoder>/geocoderOpts',
  component: GeocoderOpts
};

export const TurnOffFlyTo = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            flyTo: false
        },
        title: 'Turn off flyTo (search will not cause animation)',
        codeBlock: `<MapContainer addGeocoder={true} geocodeOpts={{flyTo: false}}`
    }
  }

  export const EnableGeolocation = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            enableGeolocation: true
        },
        title: 'Enable Geolocation (get user location)',
        codeBlock: `<MapContainer addGeocoder={true} geocodeOpts={{enableGeolocation: true}}`
    }
  }

  export const CombineVariousOpts = {
    args: {
        addGeocoder: true,
        geocoderOpts: {
            enableGeolocation: true,
            placeholder: 'changed the placeholder text',
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
        title: 'Set a flyTo object, change projection, enable geolocation, etc.',
        codeBlock: `<MapContainer mapOpts={{style: styles.courtEarthy, projection: 'globe', zoom: 1}}, addGeocoder=true, geocoderOpts={enableGeolocation: true, placeholder: 'changed the placeholder text', flyTo: {curve: 1.75, pitch: 70, bearing: -60, padding: 200}, zoom: 14.85}>`,
    }
  }

