<script>
    import { options } from "./../utils/options/geocoder-options.js";
    import { mapbox, mapKey } from "./../utils/mapbox/mapbox.js";
    import { getContext } from "svelte";

    // EXTERNAL LIBRARIES
    import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
    import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

    // EXPORTS
    export let geocoderOpts = undefined; // see: https://github.com/mapbox/mapbox-gl-geocoder/blob/main/API.md;
    export let geoprocess = undefined;

    let result;

    // validate that geoprocess is a valid function (if present at all)
    const scriptPresent = typeof geoprocess == "function";

    // GET CONTEXT
    let thisMap = getContext(mapKey).getMap();

    // MERGE DEFAULT OPTS WITH PROP (geocoderOpts)
    let customOpts = {
        ...options,
        ...geocoderOpts,
        accessToken: mapbox.accessToken,
        mapboxgl: mapbox,
    };

    // WAIT UNTIL MAP IS DEFINED
    $: if ($thisMap) {
        $thisMap.on("load", () => {
            let geocoder = new MapboxGeocoder(customOpts);
            geocoder.addTo($thisMap);

            // if geoprocess is present, fire on geocode result
            if (scriptPresent) {
                geocoder.on("result", function (e) {
                    let searchCoords = e.result.geometry.coordinates;
                    result = geoprocess(searchCoords);
                    console.log(result);
                    return result;
                });
            }
            geocoder.on("clear", () => {
                return (result = undefined);
            });
        });
    }
</script>

<p>
    {#if result}The coordinates of the address your searched are: <strong
            >{result}</strong
        >.{/if}
</p>
