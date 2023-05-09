import GeoprocessPage from './storybook-components/GeoprocessPage.svelte'; 
import {geoprocess} from '$lib/utils/actions/geoprocess.js';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: '<Geocoder>/geoprocess',
  component: GeoprocessPage
};

export const returnCoords = {
    args: {
        addGeocoder: true,
        geoprocess: geoprocess,
        title: 'geoprocesser',
        codeBlock: `<MapContainer addGeocoder={true} {geoprocess}}`,
        content: `In utils/actions, there is a geoprocessing.js file. You can create an action in there to fire on the geocoder result, such as calculating the distance to a certain point.`
    }
  }

 
