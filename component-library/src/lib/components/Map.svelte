<script>
    // UTILS
    import { setContext, getContext, onMount, onDestroy } from "svelte";
    // import { omitUndefinedValues } from "./../utils/actions/omit-undefined.js";
    import { mapKey, mapbox } from "./../utils/mapbox/mapbox.js";
    import { options } from "./../utils/options/map-options.js";

    // import {map} from '$lib/utils/stores/stores.js'

    // EXPORTS
    export let mapOpts = undefined;

    // setContext(mapKey, {
    //     getMap: () => map,
    // })

    // GET CONTEXT OF THIS MAP INSTANCE
    let map = getContext(mapKey).getMap();
    let id = getContext(mapKey).randomId();

    // PRE-DECLARED VARIABLES
    let container;

// INITIALIZE MAP AND ASSIGN TO MAP STORE
    onMount(async () => {
        let customOpts = {...options, ...mapOpts}
        customOpts.container = container;
        $map = new mapbox.Map(customOpts);

    });

    onDestroy(() => {
        $map.remove();
    })



</script>


<!-- bind map to this container instance -->
<div bind:this={container} id={id}/>
<!-- <div bind:this={container}/> -->
<div>
    <slot/>
</div>

