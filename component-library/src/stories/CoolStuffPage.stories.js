import CoolStuffPage from './CoolStuffPage.svelte';
import {
    spinGlobe
} from '$lib/utils/actions/spin-globe.js';
import {
    styles
} from '$lib/utils/options/map-style-options.js';
// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
    title: 'MapScript/Custom',
    component: CoolStuffPage
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


