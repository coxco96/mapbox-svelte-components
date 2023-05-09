<script>
    // UTILS
    import { getContext, onMount, onDestroy } from "svelte";
    import { mapKey, mapbox } from "./../utils/mapbox/mapbox.js";
    import { options } from "./../utils/options/map-options.js";
    // import {writable} from 'svelte/store';

    // EXPORTS
    export let mapOpts = undefined;
    export let mapScript = undefined;
    
    // GET CONTEXTS
    let map = getContext(mapKey).getMap();
    let mapLoaded = getContext(mapKey).getMapLoaded();
    console.log($mapLoaded);

    // PRE-DECLARED VARIABLES
    let container;

// INITIALIZE MAP AND ASSIGN TO MAP STORE
    onMount(async () => {
        let customOpts = {...options, ...mapOpts}
        customOpts.container = container;
        $map = new mapbox.Map(customOpts);
        mapScript($map);
    });

    onDestroy(() => {
       if($map) $map.remove();
    })



</script>


<!-- bind map to this container instance -->
<div bind:this={container}/>
<div>
    <slot/>
</div>

