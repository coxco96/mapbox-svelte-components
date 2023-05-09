import MapScriptPage from './storybook-components/MapScriptPage.svelte';
import {
    spinGlobe
} from '$lib/utils/actions/spin-globe.js';
import {
    styles
} from '$lib/utils/options/map-style-options.js';
// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
    title: '<Map>/mapScript',
    component: MapScriptPage
};


export const SpinGlobe = {
    args: {
        mapScript: spinGlobe,
        title: 'Add a custom script as an action',
        codeBlock: `<MapContainerTODO>`,
        content: `content here`,
        mapOpts: {
            'style': styles.courtBluePink,
            'projection': 'globe'
        }
    }
}


