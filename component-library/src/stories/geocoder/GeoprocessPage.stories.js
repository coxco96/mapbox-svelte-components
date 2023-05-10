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
        title: 'Run a geoprocessing function (set in utils/actions)',
        codeBlock: `<MapContainer addGeocoder={true} {geoprocess}}`,
    }
  }

 
