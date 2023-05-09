<!-- only accepts geojson sources at this time -->
<script>
    import { getContext } from "svelte";
    import { sourceOptions } from "../utils/options/geojson-options.js";

    import { mapKey } from "../utils/mapbox/mapbox.js";
    import { randomString } from "../utils/actions/random-string.js";

    // generate random string to assign to this instance of source and layer
    let randomId = randomString(7);

    export let sourceOpts = undefined;
    export let layerOpts = undefined;
    export let data = undefined;

    // GET CONTEXT
    let thisMap = getContext(mapKey).getMap();

    // MERGE DEFAULT OPTS WITH PROP (sourceOpts)
    let customSourceOpts = {
        ...sourceOptions, // default
        ...sourceOpts, // custom
        data: data,
        type: "geojson",
    };

    $: if ($thisMap) {
        $thisMap.on("load", () => {
            $thisMap.addSource(randomId, customSourceOpts);
            console.log(layerOpts)
            // display source as layer
            if (layerOpts) {
                let customLayerOpts = {
                    ...layerOpts,
                    source: randomId,
                    id: randomId
                };
                // add layer to this map instance
                $thisMap.addLayer(customLayerOpts);
            }
        });
    }
</script>
