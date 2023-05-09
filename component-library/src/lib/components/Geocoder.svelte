<script>
    import { options } from "./../utils/options/geocoder-options.js";
    import { mapbox, mapKey } from "./../utils/mapbox/mapbox.js";
    import { getContext } from "svelte";

    // EXTERNAL LIBRARIES
    import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
    import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

    // EXPORTS
    export let geocoderOpts = undefined; // see: https://github.com/mapbox/mapbox-gl-geocoder/blob/main/API.md;

    // GET CONTEXTS
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
        $thisMap.on('load', () => {
        let geocoder = new MapboxGeocoder(customOpts);
        geocoder.addTo($thisMap);
        })
    } 

 
</script>
