<script>
    // UTILS
    import {
        getContext,
        onMount,
        onDestroy,
    } from "svelte";
    import { omitUndefinedValues, setOptions } from "$lib/utils/utils.js";
    import { mapKey, mapbox } from "$lib/utils/mapbox";
    import { options } from "./map-options";
    // EXPORTS
    export let mapOpts;
    // GET CONTEXT OF THIS MAP INSTANCE AND ITS OPTS
    let map = getContext(mapKey).getMap();
    let opts = getContext(mapKey).getMapOpts();

    // PRE-DECLARED VARIABLES
    let container; // map needs container to bind to

    // INITIALIZE MAP AND ASSIGN TO MAP STORE
    onMount(async () => {
        // process any map options sent in as prop
        if (!mapOpts) {
            $opts = options;
        } else {
            $opts = setOptions(options, mapOpts);
        }
        $opts = omitUndefinedValues($opts);
        $opts.container = container;
        $map = new mapbox.Map($opts);
    });
</script>

<!-- bind map to this container instance -->
<div bind:this={container} />

<div>
    <slot />
</div>
