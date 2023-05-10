import MapScriptPage from './storybook-components/MapScriptPage.svelte';
import {
    spinGlobe
} from '$lib/utils/actions/spin-globe.js';
import {
    styles
} from '$lib/utils/options/map-style-options.js';
export default {
    title: '<Map>/mapScript',
    component: MapScriptPage
};


export const SpinGlobe = {
    args: {
        mapScript: spinGlobe,
        title: 'Spin the globe by adding a custom script as an action',
        codeBlock: `<MapContainer mapScript={spinGlobe} mapOpts={style: styles.courtPixie, projection: 'globe}>`,
        mapOpts: {
            'style': styles.courtPixie,
            'projection': 'globe'
        }
    }
}


