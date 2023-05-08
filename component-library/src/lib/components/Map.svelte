<script>
    // UTILS
    import { getContext, onMount, onDestroy } from "svelte";
    import { omitUndefinedValues } from "./../utils/actions/omit-undefined.js";
    import { setOptions } from "./../utils/actions/set-options.js";
    import { mapKey, mapbox } from "./../utils/mapbox/mapbox.js";
    import { options } from "./../utils/options/map-options.js";
    // EXPORTS
    export let mapOpts;
    // GET CONTEXT OF THIS MAP INSTANCE AND ITS OPTS
    let map = getContext(mapKey).getMap();
    // maybe opts should not be a store?? context only?? TODO
    let opts = getContext(mapKey).getMapOpts();

    // PRE-DECLARED VARIABLES
    let container;


    // INITIALIZE MAP AND ASSIGN TO MAP STORE
    onMount(async () => {
        
        let customOpts = {...options, ...mapOpts}
        console.log(customOpts);


        // process any map options sent in as prop
        if (!mapOpts) {
            opts = options;
        } else {
            // opts = setOptions(options, mapOpts);
            customOpts = {...options, ...mapOpts}
        }
        opts = omitUndefinedValues(customOpts);
        customOpts.container = container;
        map = new mapbox.Map(customOpts);
    });
</script>

<!-- bind map to this container instance -->
<div bind:this={container}/>
<div>
    <slot />
</div>
